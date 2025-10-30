import React ,{useState }from "react";
import axios from "axios";


const PostCreate = () => {
    const [title, setTitle] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();
        await axios.post('http://localhost:4000/posts', {
            title
        });
        console.log(event);
        setTitle('');
        
    };


    return (
        <div >
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="postTitle">Post Title</label>
                    <input value={title} onChange={e=> setTitle(e.target.value)} placeholder="Enter title"
                        className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary mt-3">Submit</button>
            </form>
        </div>
    );
}
export default PostCreate;