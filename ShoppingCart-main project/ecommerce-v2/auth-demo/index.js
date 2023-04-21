const express = require("express");
const app = express();
const path = require("path")
const mongoose = require("mongoose");
const User = require("./models/User")
const bcrypt = require('bcrypt');
const session = require("express-session");
const MongoDBStore = require('connect-mongodb-session')(session);


mongoose.connect("mongodb://127.0.0.1:27017/authDB")
.then(()=> console.log("DB CONNECTED"))
.catch((err)=> console.log(err));


app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs");


app.use(express.urlencoded({extended:true}))
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    store: new MongoDBStore({
        uri: 'mongodb://127.0.0.1:27017/authDB',
        collection: 'mySessions'
      }),

      cookie: {

        httpOnly:true,
        maxAge: 7*24*60*60*1000

      }
  }))



  let requireLogin = (req,res,next)=>{

    if(!req.session.user_id){

        return res.redirect("/login")
    }
 next();

  }



app.get("/",(req,res)=>{

    res.send("home route")

})

app.get("/register",(req,res)=>{

    res.render("signup");


})

app.post("/register", async(req,res)=>{

    const {username, password} = req.body;

    const salt = await bcrypt.genSalt(12);

    const hash = await bcrypt.hash(password, salt);

    await User.create({username , hash});

    res.redirect("/login")


})

app.get("/login", (req,res)=>{

    res.render("login")


})


app.post("/login", async(req,res)=>{

   const {username,password} = req.body;

   const foundUser = await User.findOne({username});

   console.log(foundUser)

   if(!foundUser){

     return res.redirect("/register")

   }

   const validUser = await bcrypt.compare(password , foundUser.hash);

   if(!validUser){

    return res.send("inncorrect password entered")

   }

   req.session.user_id = foundUser._id

    return res.redirect("/dashboard")

})


app.get("/logout", (req,res)=>{

    req.session.destroy();

    res.send("please login first")




})

app.get("/dashboard", requireLogin , (req,res)=>{


    res.send(" you have successfully entered dashboard");

})


app.listen(5000, ()=>{

    console.log("server running");

})

