
const express = require("express");
const path = require("path")
const app = express();
const cookieParser= require("cookie-parser")

app.set("view", path.join(__dirname, "views"))

app.use(cookieParser("thisissecretSession"))


app.get("/setcookies", (req,res)=>{


    res
    .cookie("name", "kartik" , { maxAge: 7 * 24 * 60 * 60 * 1000})
    .cookie("location", "delhi", { httpOnly: true })
    .cookie("age", 24 , {signed: true})
    .cookie("login", "true")
    .send(req.cookies)

})

app.get("/seecookies",(req,res)=>{

    // res.send(req.cookies)

});

app.get("/login", (req,res)=>{

    const {login} = req.cookies;

    if( login === "true")
    return res.send("user is logged in ");
    return res.redirect("/setcookies")

})

app.listen(3000,()=>{

    console.log("server started")

})

