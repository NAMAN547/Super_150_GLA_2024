const express = require("express");
const app = express();
const port = 5000;


// app.use((req,res)=>{

// //    res.send("Express Lecture")

// console.log("server is running")
// })



app.get('/',(req,res)=>{   // creating GET method route to the home/root route

    // res.send("Hello world");   // response can be send as string or html as shown below
   
    res.send(`
    <h1> Welcome to Express framework</h1>
    `)

})

app.get('/r/:subreddit',(req,res)=>{   // path parameters


    console.log(req.params);  

    const {subreddit} = req.params;

    res.send(` you are watching ${subreddit} subreddit`)
})

app.get('/user/:username', (req,res)=>{

    const {username} = req.params;

    res.send(`You are watching ${username} profile`)

})

app.get('/post/:postId/comments/:commentId', (req,res)=>{

    const {commentId , postId} = req.params;

    res.send(` You are viewing post ${postId} with commentId ${commentId}`);

})

app.get('/search',(req,res)=>{    // query string parameters
  
    const {q} = req.query;
    res.send(`Jai Shree Ram from ${q} ! `)


})

app.get('*', (req,res)=>{                 // wildcard(*) in route parameter       

    res.send("You have entered the Wrong URL!")

})

app.listen(port,()=>{    // listening the connection on the specified port

    console.log(`server is running at ${port}`)
})



