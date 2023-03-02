const express = require("express");
const path = require("path")
const engine = require("ejs-mate")
const app = express();
const PORT = 3000;
const mongoose = require("mongoose")

mongoose.connect("mongodb:// 127.0.0.1:27017/shopping-app")
.then(()=> console.log(" DB CONNECTED!"))
.catch((err)=> console.log(err))


app.engine("ejs", engine)
app.set("view engine","ejs");
app.set("views", path.join(__dirname, "views" ))


app.get("/", (req,res)=>{

    res.render("index")


})

app.get("/products", (req,res)=>{

    res.render("./products/product")


})






app.listen(PORT, ()=>{


    console.log(` server running at port ${PORT}`)
})