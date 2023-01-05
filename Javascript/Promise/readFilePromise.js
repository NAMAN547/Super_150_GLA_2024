
/* Promises implementation in fs module(asynchronus methods) */


const fs = require("fs");

let readFilePromise = fs.promises.readFile("q1.html","utf-8"); 
// here fs.promises.readFIle is a promise in itself

console.log(readFilePromise);

readFilePromise.then(function(data) {
    console.log(readFilePromise);
    console.log("I ran first");
    return "hello";
})

readFilePromise.then(function(data) {
    console.log("I ran second");
})