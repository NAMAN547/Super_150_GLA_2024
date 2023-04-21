
const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({

    username: {

        type: String,
        trim: true
    },

    hash : {

        type: String,
        trim: true
    }
})

const User = mongoose.model("User", userSchema)

module.exports = User