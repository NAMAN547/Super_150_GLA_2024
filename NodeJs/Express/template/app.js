const express = require("express");
const app = express();
const path = require("path");

const port = 3000;


app.set('view engine', 'ejs');

app.set('views',path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')))

app.set(path.join(__dirname , 'views', 'partials'))


const todos = [

    "football khelna",
    "coding krna",
    "maar pitayi"
]


app.get('/home',(req,res)=>{

    res.render('index');

})

app.get('/random',(req,res)=>{

    const randomNumber = Math.floor(Math.random()*10);

    res.render('randomNumber', {randomNumber});

})


app.get('/todos',(req,res)=>{

    res.render('todos',{ todos } )
})




app.listen( port ,()=>{

    console.log(`Server is running at ${port}`)

})