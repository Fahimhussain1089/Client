import React from "react";
import PostCreate from "./PostCreate";
import PostList from "./PostList";


const   App = () => {
    return (
        <div className="container">
            <h1>Post, comment , Client !!!!!!!!</h1>
            <PostCreate />
            <hr />
            <h1>posts</h1>
            <PostList></PostList>
        </div>
    );
}
 
export default App;
