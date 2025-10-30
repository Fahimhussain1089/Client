import React, { useEffect, useState } from 'react'
import axios from 'axios';
import colors from './utils/logcolors';
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';



const PostList = () => {
    const [posts,setPosts] = useState({});

    const fetchPost = async() => {
        const res = await axios.get('http://localhost:4002/posts');
        console.log(colors.lime(`Client=>PostList=> :: ${res.data}`));
        setPosts(res.data);


    };

    useEffect(() => {
        fetchPost();


    },[]);

    const renderedPosts = Object.values(posts).map(post => {
        return <div className="card"
                style={{width:'100%',margin:'20px'}}
                key={post.id}>

                    <div className='card-body'>
                        <h3>{post.title}</h3>
                       
                        {/* Display comments for this post */}
                        <CommentList comments={post.comments} />
                            
                        {/* Form to create new comments */}
                        <CommentCreate postId={post.id} />
               

                    </div>
                </div>
    })
    //  Console logs - these will work in Node.js but not in browser console
    console.log(colors.lightYellow(`LIGHT YELLOW: See the posts ${JSON.stringify(posts)}`));
    console.log(colors.darkGreen(`dark green sseee the post ${JSON.stringify(posts)}`));
 



    return (
        <div className="d-flex flex-row flex-wrap justify-content-between">
            {renderedPosts}
            
        </div>
  );
}

export default PostList;
