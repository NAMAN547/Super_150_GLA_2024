


// global scope

// let a = 24;

// console.log(a);


// module scope

// export const moduleVar = "exported variable";


// //function scope

// function print(){

//     let a = 2;

//     console.log(a);

//     newVar = "var";

//     console.log(newVar);

//     var newVar;




    // if(true){

    //     let b =3;
    //     const c = 4;

    //     var d = 5;

    //     var d = 7

    //     console.log(b,c)
    // }

    // console.log(b,c)

    // console.log(d)


// }

// print();

// console.log(a)



// function


// function declaration

// print();


// function print(){


//     console.log("hello world")



// }


//function expression


// print()


// const print = function(){




// }

// arrow function 


// let print =  () =>console.log("hello world");

// print();




// error handling 


// try{
// //     console.log("try catch start")
//     // vdgdgdf;

// // console.log("try block ends")

// setTimeout(()=>{


//     cfdhhdhdd;

// },1000)

// }

// catch(err){

//     // console.log(err.stack)

//     console.log("error aagya, abe error theek kar");

//     // console.log(e)

// }

// setTimeout(()=>{

//     try{

//         ggaggaag;



//     }
//     catch(err){


// console.log("error aagya")


//     }

// },1000)




// const error = new Error("isme error message aayega");

// const json = "{ name: 'john'}"

// try{

//     console.log("try block start");

//     throw new SyntaxError("this is a syntax error");

    

// }

// catch(err){

//     console.log(err)

//  console.log("error aagya")
    
// }





// Object



// const person = {

//     name:"kartik",
//     age: 25,
//     hobbies: ["football","irritate krna", "petu"],

//     "married hai": false,

//     sayName: function(){

//         console.log("hello world")
//     }

// }


// console.log(person["married hai"]);

// for(let key in person){

//     console.log(person[key])
// }

// console.log(Object.values(person));



// let obj1 = {

//     name: "john"
// }

// let obj2 = obj1;

// obj1 = null;

// console.log(obj1.name);



// const person = {

//     name:"kartik",
//     age: 25,
//     hobbies: ["football","irritate krna", "petu"],

//     "married hai": false,

//     sayName: function(){

//         console.log("hello world")
//     }

// }

// const person2 = {

//     address: "new delhi",

//     favColor : ["red", "green","blue"],

//     // __proto__: person

// }

// const person2 = Object.create(person);

// console.log(person2.name);




// this keyword



// function fun(){

//     console.log(this);

//     return 1;
// }

// fun();



// const p1 = {

//     a : 2,
//     b:3,

//     p2 : {

//         c : 4,
//         d : 5,

//         f2 : function(){

//             console.log(this)
//         }


//     },

//     fun : function(){

       
        
//         this.a = 3;
//         console.log(this)
//     }
// }

// console.log(p1.fun())


const p1 = {

    a: 1,
    b: 2,
    c: 3
}

let p2 = {

    d: 4,
    e: 5,

    fun : function(){

        console.log(this)
    }
}

let newFun = p2.fun.bind(p1)

console.log(newFun())



//

// Map 

let arr =[1,2,3,4,5,6,7,8,9,10];

// let newArr = arr.map( (element,index,array));

// console.log(newArr);



// Filter 

let fArray = arr.filter((x)=> x % 2 == 0);

console.log(fArray)


// Reduce

let rArray = arr.reduce((sum , ele)=> sum + ele, 0)

console.log(rArray);












// PollyFill

// function newPollyFill(arr , cb){

//     let newArr = [];

//     for(let i =0; i < arr.length;i++){


//     }

// }

// function cb(x){


// }















