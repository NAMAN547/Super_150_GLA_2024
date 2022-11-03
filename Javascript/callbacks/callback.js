
  /**** CallBack Theory ****/


// function print(val){

//     console.log(val)
// }

// function add(n1,n2){

//     let  sum = n1 + n2;
//     print(sum);
// }

// add(2,3,print)



/****  Closure Property   *****/



// function outer() {
//     console.log("outer is running")
//     console.log("I am outer");
//     console.log("outer is returning something");
//     return function inner() {
//         console.log("I am inner")
//     }
// }
// let innerRef = outer();
// innerRef();
// function firstName(fname) {
//     console.log("Your first Name is", fname)
//     return function lastname(lName) {
//         console.log(fname + " " + lName);
//     }
// }
// let lastNameFnRef = firstName("Naman");
// console.log("`````````````````````````");
// lastNameFnRef("Tyagi")





/*******  Serial Read Files  *********/


// const fs = require("fs");

// let count = 0;


// function cb(err,data){

//     count += 1;

//     if(count <= 3){

//         if(!err){
//             console.log(data)
//         }else{
//             console.log(err)
//         }
//     }
//     fs.readFile("q" + (count + 1) + ".html","utf-8",cb)
// }

// fs.readFile("q1.html","utf-8",cb)





/*******  Parrallel Read Files  *********/


// function cb(err,data){

//     if(!err){
//         console.log(data)
//     }
// }


// for(let i = 1; i <= 3; i++){

//     fs.readFile("q" + i + ".html","utf-8", cb)
// }




/*****  SetTimeout and SetInterval *****/


// setTimeout(()=>{

//     console.log("this is a callback")
// },3000);



// let a = true;
// setTimeout(function(){

//     a = false;
// },10000);


// while(a){

//     console.log("hello")
// }




// setInterval(function(){

//     if(a){

//         console.log(
//             "hello"
//         )
//     }
// },1000)


// setTimeout(function(){

//     a = false;
// },10000)





































