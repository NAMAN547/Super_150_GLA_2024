const express = require("express");
const router = express.Router();
const Review = require("../models/Review");
const Product = require("../models/Product")


router.post("/products/:productid/review", async(req,res)=>{

    const {productid}= req.params;

    const { rating , comment} = req.body;

     // find the product with the given product id
    const product = await Product.findById(productid);


     // Creating and Adding the review in Review model
    let review = await Review.create({rating , comment});


     // push the reference of created review inside product.reviews array
       await product.review.push(review);

       // since storing review in array is not permanent, we need to save it
       await product.save();

       res.redirect(`/products/${productid}`)
})

module.exports= router