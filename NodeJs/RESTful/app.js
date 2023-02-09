const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const { v4: uuid } = require('uuid');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))



let comments = [

    {
        id: uuid(),
        user:"john",
        text:"this is john's comment"
    },
    {
        id: uuid(),
        user:"harry",
        text:"this is harry's comment"
    },
    {
        id: uuid(),
        user:"ron",
        text:"this is ron's comment"
    },
    
]

// List all the comments

app.get('/comments', (req, res) => {
    res.render('index', { comments });
});

// Display the form to create new comment

app.get('/comments/new', (req, res) => {
    res.render('new');
});

// Create new comment

app.post('/comments', (req,res)=>{

    const {user , text} = req.body;

    comments.push({id:uuid(), user, text});

    res.redirect('/comments');

})


// Show one comment
app.get('/comments/:commentid', (req,res)=>{

    const {commentid} = req.params;

   const comment =  comments.find((comment)=> comment.id===(commentid))
    res.render('show', {comment})

})

// Get edit form prefilled with the data
app.get('/comments/:commentid/edit',(req,res)=>{

    const {commentid} = req.params;

     const comment = comments.find((comment)=> comment.id === (commentid))

    res.render('edit', {comment})

})

// Update the commnet with given commentid
app.patch('/comments/:commentid',(req,res)=>{

    const {commentid} = req.params;

    const comment = comments.find((comment)=> comment.id === (commentid));

    comment.user = req.body.user;
    comment.text = req.body.text;

    res.redirect('/comments')

})


// Delete a comment
app.delete('/comments/:commentid', (req,res)=>{

    const {commentid} = req.params;

     comments = comments.filter((comment)=> comment.id != (commentid));

    res.render('index', {comments})

})


app.listen(3000,()=>{
    console.log('server started at port 3000');
  });
