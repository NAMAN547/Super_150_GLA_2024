var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var app = express();
var session = require('express-session')


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


 const sessionnew = {
  secret: 'this is a session',
  resave: false,
  saveUninitialized: true,
};

app.use(session(sessionnew))


app.get("/session", (req,res)=>{

  res.send(" session created")

})


app.get("/user", (req,res)=>{

  const {username} = req.query;

  req.session.username = username;
  console.log(req.session)

  res.redirect("/greet")

});

app.get("/greet", (req,res)=>{

  const {username} = req.session;

  console.log(req.session)

  res.send(` welocome ${username}`)

})




app.listen(5000, ()=>{

  console.log("server started");

})
