// import React, { useState } from "react";
// import axios from "axios";

// const PostCreate = () => {
//   const [title, setTitle] = useState("");

//   const onSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       // Use localhost:4000 for direct posts service access
//       await axios.post("http://localhost:4000/posts/create", {
//         title,
//       });
//       setTitle("");
//     } catch (error) {
//       console.error('Error creating post:', error);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <div className="form-group">
//           <label>Title</label>
//           <input
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="form-control"
//           />
//         </div>
//         <button className="btn btn-primary">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default PostCreate;

import React, { useState } from "react";
import axios from "axios";

const PostCreate = () => {
  const [title, setTitle] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    // await axios.post("http://localhost:4000/posts", {
   //   await axios.post("http://posts-cluster-srv:4000/posts/create", {
    await axios.post("http://posts.com/posts/create", {
      title,
    });

    setTitle("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default PostCreate;
