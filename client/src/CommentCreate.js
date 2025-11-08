import axios from 'axios';
import React ,{useState } from 'react'


const CommentCreate = ({ postId }) => {
    const [content, setContent] = useState('');
    
    const onSubmit = async (event) => {
        event.preventDefault(); // Add this to prevent page refresh
        
        try {
            // await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
            //     content
            // });
           // await axios.post(`http://comments-srv:4001/posts/${postId}/comments`, {
            await axios.post(`http://posts.com/posts/${postId}/comments`, {


                content
            });
            setContent('');
        } catch (error) {
            console.error('Error creating comment:', error);
        }
    };





  return (
    <div>
        <form onSubmit={onSubmit}>
            <div className='form-group'>
                <label>New Comemnt</label>
                <input value={content} onChange={e => setContent(e.target.value)}  className='form-control'/>
                
            </div>
            <button className='btn btn-primary'> submit </button>

        </form>
      
    </div>
  );
}

export default CommentCreate
