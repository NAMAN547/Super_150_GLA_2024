const mongoose = require("mongoose");


const reviewSchema = new mongoose.Schema({

    rating: Number,

    comment: String

})


const Review = mongoose.model("Review", reviewSchema);

module.exports= Review