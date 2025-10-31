const express = require('express');
const colors = require('./utils/consolecolors');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const axios = require('axios');


const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {}

const logAllPosts = () => {
    console.log(colors.cyan('\n📊 CURRENT POSTS DATA:'));
    console.log(colors.cyan('====================='));
    
    if (Object.keys(posts).length === 0) {
        console.log(colors.yellow('No posts yet'));
        return;
    }
    
    Object.values(posts).forEach(post => {
        console.log(colors.green(`\n📝 Post: "${post.title}" (ID: ${post.id})`));
        
        if (post.comments && post.comments.length > 0) {
            console.log(colors.info('   💬 Comments:'));
            post.comments.forEach(comment => {
                console.log(colors.info(`     - ${comment.content} (ID: ${comment.id})`));
            });
        } else {
            console.log(colors.yellow('   💬 No comments yet'));
        }
    });
    console.log(colors.cyan('=====================\n'));
};

app.get('/posts', (req,res)=> {
    console.log(colors.orange('📨 GET /posts - Sending all posts data'));
    logAllPosts();
    res.send(posts);

});

const handleEvent = (type,data) => {
     console.log(colors.pink(`\n🎯 Event Received: ${type}`));
    console.log(colors.pink(`📦 Event Data:`, JSON.stringify(data, null, 2)));
    
    if (type === 'PostCreated') {
        const { id, title } = data;
        posts[id] = { id, title, comments: [] };
        
        console.log(colors.green(`✅ Created new post: "${title}" (ID: ${id})`));
        
    } else if (type === 'CommentCreated') {
        const { id, content, postId , status } = data;
        
        const post = posts[postId];
        if (post) {
            post.comments.push({ id, content  , status }); 
            console.log(colors.info(`💬 Added comment to post "${post.title}": "${content}" \n "check kro status:: \n " "${post.status}"`));
        } else {
            console.log(colors.error(`❌ Post ${postId} not found for comment`));
        }
    } else {
        console.log(colors.yellow(`⚠️  Unknown event type: ${type}`));
    }
    
    if(type === 'CommentUpdated'){
        const {id,content,postId,status} = data;
        const post = posts[postId];
        const comment = post.comment.find(comment => {
            return comment.id === id;
        });
        comment.status = status;
        comment.content = content;
    }
}

app.post('/events', (req, res) => {
    const { type, data } = req.body;
    
   

    // Log the updated state after processing the event
    logAllPosts();

    handleEvent(type,data);    
    
    res.send({ status: 'OK' });
});


app.listen( 4002 , async () =>{

    console.log(colors.info(`Listening on 4002`));

     try {
        const res = await axios.get('http://localhost:4005/events');
        
        // Check if res.data exists and is iterable
        if (res.data && Array.isArray(res.data)) {
            for(let event of res.data){
                console.log(colors.seaGreen('Processing events: ', event.type));
                handleEvent(event.type, event.data);
            }
        } else {
            console.log(colors.yellow('⚠️ No events data received or data is not an array'));
        }
    } catch (error) {
        console.log(colors.error(`❌ Error fetching events: ${error.message}`));
    }

});
