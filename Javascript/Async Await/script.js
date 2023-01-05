
const fs = require("fs");


/** ASYNC KEYWORD **/

/*
Async keyword returns a new promise. It wraps the whole function into a promise and returns it.
    return => resolve
    throw =>  reject

*/


// async function abc() {      
//     console.log("hello");
//     return "abc";                
// }
 
// let temp = abc();                                // a promise would be stored on this variable
// console.log(temp);



// function abc() {                                // both the abc() function would print the same value. 
//     return new Promise(function(res,rej){
//         console.log("hello");
//         res("abc");
//     });
// }

// let temp1 = abc();

// console.log(temp1);




/** AWAIT KEYWORD **/

/*
    1) Await can only be used with async 
    2) Await are always used in front of a promise.
    2) Await wraps the code(any) after it into the .then() of the promise on which is applied.
    4) jo code await ke neeche aata hai voh tabhi run hoga jab promise resolve hoke aagya kyu ki vo code uss promise
    ke .then mai hoga jo sirf resolved value hi accept krta hai.
    
    5) the await keyword stores the resolved value of promise into a variable
*/



// async function abc () {
//     let data = await fs.promises.readFile("q1.html", "utf-8");
//     console.log(data);                                             / / this run after the file reading is completed
//     return "resolve";
// }

// abc().then(function(data){                            // this .then() is of promise abc
                                                         // abc and fs.promises.readFile are both Promises
//     console.log(data);
// }).catch(function(err){
//     console.log(err);
// })


 /** Converting async to promise **/ 


// function abc() {                                             
//     return new Promise(function (res, rej) {
//         fs.promises.readFile("q1.html", "utf-8").then(function (data) {
//             console.log(data);
//             res("resolve");
//         })
//     })
// }

// abc().then(function (data) {
//     console.log(data);
// }).catch(function (err) {
//     console.log(err);
// })




/* ************  Convert this async await to Promises ***************** */


async function abc () {
    await fs.promises.writeFile("q1.html", "hello");
    let data = await fs.promises.readFile("q2.html", "utf-8");
    console.log(data);
    return "how are you";
}

async function main() {
    let data = await abc();
    console.log(data);
}
main();


