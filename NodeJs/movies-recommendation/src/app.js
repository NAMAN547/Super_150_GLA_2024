const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Serie = require("./models/Serie")
const dotenv = require("dotenv")
app.use(express.json())

dotenv.config({ path: 'config.env' });

mongoose.connect(process.env.MONGO_URI).then(()=> console.log("DB CONNECTED!"))
.catch((err)=> console.log(err))

app.set("view engine", "ejs");

app.set("views",path.join(__dirname, "views"))

app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req,res)=>{

    res.render("index")
})

app.get("/search", async(req,res)=>{

    const {q} =  req.query;

       const series = await Serie.find({ name: { $regex : `^${q}`}});
      
       res.status(200).json(series);

})

app.listen(5000, ()=>{

    console.log("server running at port 5000")



})