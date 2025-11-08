const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');
const axios = require('axios');
const { stat } = require('fs');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const commentsByPostId = {};

app.get('/posts/:id/comments', (req, res) => {
    res.send(commentsByPostId[req.params.id] || []);
});

app.post('/posts/:id/comments', async (req, res) => {
    try {
        const commentId = randomBytes(4).toString('hex');
        const { content } = req.body;

        const comments = commentsByPostId[req.params.id] || [];
        
        comments.push({ id: commentId, content,status:'pending' });
        
        commentsByPostId[req.params.id] = comments;
        
        // Send event to event bus with error handling
        try {
            // await axios.post('http://localhost:4005/events', {
            await axios.post('http://event-bus-srv:4005/events', {
                type: 'CommentCreated',
                data: {
                    id: commentId,
                    content,
                    postId: req.params.id,
                    status: 'pending'
                }
            });
            console.log('\x1b[95m%s\x1b[0m' , '✓ CommentCreated event sent');
        } catch (eventError) {
            console.log('⚠ Event bus not available, but comment created locally');
            // Continue even if event bus is down
        }

        res.status(201).send(comments);
    } catch (error) {
        console.error('Error creating comment:', error);
        res.status(500).send({ error: 'Internal server error' });
    }
});

app.post('/events' , async (req, res) => {
    console.log('\x1b[95m%s\x1b[0m','Event Received in Comments:', req.body.type);
    const {type,data} = req.body;
    if(type === 'CommentModerated' ){
        const {postId,id,status,content} = data;
        const comments = commentsByPostId[postId];
        const comment = comments.find(comment => {
            
            return comment.id === id;

        });
        comment.status = status;
        // await axios.post('http://localhost:4005/events',{
        await axios.post('http://event-bus-srv:4005/events',{
            type: 'CommentUpdated',
            data:{
                id,
                status,
                postId,
                content,
            },
        });
    }
    res.send({}); 
});

app.listen(4001, () => {
    console.log('\x1b[95m%s\x1b[0m', 'Comments service listening on 4001');
});
