const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts", async (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;

  posts[id] = {
    id,
    title,
  };

  await axios.post("http://localhost:4005/events", {
    type: "PostCreated",
    data: {
      id,
      title,
    },
  });

  res.status(201).send(posts[id]);
});

app.post("/events", (req, res) => {
  console.log("Received Event", req.body.type);

  res.send({});
});

app.listen(4000, () => {
  console.log("Listening on 4000");
});

// const chalk = require('chalk');

// const express = require('express');
// const bodyParser = require('body-parser');
// const {randomBytes } = require('crypto');
// const axios = require('axios');


// const cors = require('cors');

// const app = express();
// app.use(bodyParser.json());


// const port = 4000;
// const posts  = {};

// //_____for microservice 
// // Enable CORS for all routes
// app.use(cors());

// // Or more specific configuration
// app.use(cors({
//     origin: 'http://localhost:3000',
//     credentials: true
// }));
// //________for microservice end 

// app.get('/posts', (req, res) => {
//     res.send(posts);
// });

// app.post('/posts',async (req, res) => {
//     const id = randomBytes(4).toString('hex');
//     const { title } = req.body;

//     posts[id] = {
//         id, title
//     };
//    await axios.post('http://localhost:4005/events',{
//         type:'PostCreated',
//         data:{
//             id,title
//         }
//     })

//     res.status(201).send(posts[id]);
// });
// app.post('/events',(req , res) =>{
//     console.log('\x1b[95m%s\x1b[0m' , 'Recevied Event ', req.body.type);
    
//     res.send({});

// });

// app.listen(port, () => {
//     console.log('\x1b[95m%s\x1b[0m', `Example app listening at http://localhost:${port}`);


// });

