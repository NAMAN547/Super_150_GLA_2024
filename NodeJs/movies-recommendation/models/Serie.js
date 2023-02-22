
const mongoose = require("mongoose");

 const serieSchema =  new mongoose.Schema({

    name: {

        type: String,
        required:true,
        maxLength: 25
    },

    date: {

        type: Number,
    }, 

    ratings: {

        type: Number,
        required: [true, " you need to provide ratings!!"],
        min: 1,
        max: 10
    },

    isWatched: {

        type: Boolean,
        default: false
    }
 })


  const Serie =  mongoose.model("Serie", serieSchema)


  module.exports = Serie;