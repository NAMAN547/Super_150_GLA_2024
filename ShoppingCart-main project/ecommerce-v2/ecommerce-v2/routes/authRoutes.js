const express = require("express");
const router = express.Router();
const User = require("../models/User");
const passport = require("passport")


//get register page
router.get("/register", (req,res)=>{

    res.render("auth/signup")
})


// router.get("/fakeUser",async(req,res)=>{
    
//     const user = new User({username: "fakeUser", email: "abcd@gmail.com"});
//      const newUser = await User.register(user , "12345");
//     res.send(newUser);

// })


//register new user
router.post("/register",async(req,res)=>{

    const {username,password,email}= req.body;

        const user = new User({username, email})

      const newUser = await User.register(user, password);

      req.flash("success", " You have Registered Sucessfully")

    res.redirect("/login")

})


router.get("/login",(req,res)=>{

    res.render("auth/login")

})


// Login user into the session
router.post("/login", passport.authenticate("local", {

     failureRedirect: "/login" ,
     failureFlash: "Login error,please try again!"

}), (req,res)=>{

    req.flash("success", `${req.user.username.toUpperCase()}, your login was successfull`)

    res.redirect("/products")

})

// logout user from session
router.get('/logout', function(req, res, next) {
    req.logout(function(err) {
      if (err) { return next(err); }
      req.flash('success', 'GoodBye, see you again!');
      res.redirect('/login');
    });
  });

module.exports=router;