const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/seriesDB')
.then(()=> console.log("connection open"))
.catch((err)=> console.log("connection failed",err));



const seriesSchema = new mongoose.Schema({

    name: {

        type: String,
        required: [true, " name is not entered"]

    },
    date: Number,
    ratings:Number,
    isWatched: Boolean

})

   // Technically models is a js class

    const Serie =  mongoose.model('Serie', seriesSchema );

    
/**** creating an instance of the Model class and passing the data in it ****/ 

//    const friends =  new Serie({ name: "friends reunion", date: 2018, ratings: 8.5, isWatched: true });

//    console.log(friends);



//    friends.save()
//    .then(()=> console.log(" data stored in db"))
       



