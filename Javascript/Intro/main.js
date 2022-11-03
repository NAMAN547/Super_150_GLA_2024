
// let age = 25;

// age = 54;

// const name = 'naman' ,
//  age = 32,
//  lecture = 'gla';
// console.log(age);



// alert(NaN ** 2);

// let x = NaN;

// console.log(x, typeof x);


// let isGreater = -4 > 1;

// alert(isGreater);


// let y;

// console.log(y, typeof y);



// alert('this is an alert');


// let a = prompt('How old are you', 25);

// alert(`you are ${a} years old`)


// let isGreater = confirm('is 4 greater than 1');
// alert(isGreater);


// document.write('this is a statement')



// let a = '31';

// console.log(typeof a);

// a = Number(a);

// a += 1;

// alert(a);



// let  b = '31';

// let c = '32';

// console.log(+a + +b);


// function typeConversion(){

//     let num = document.getElementById("userinput").value;

//     console.log(+num, typeof +num);
// }


// let x;
// let y;
// let z;

// x = String(3.14);
// console.log(x, typeof x);

// y = Boolean('');
// console.log(y,typeof y);



// Basic Operators, Maths


// console.log('this is first string ' + 'this is second string');


// console.log( '6' / 2);


// let num = 2;

// console.log(++num);
// console.log(num);

// console.log(num++);
// console.log(num);


// let num2 = 2;
// num2 *= 3;

// console.log(num2);


// console.log(!!true);



// console.log( 'tree' > 'arie');


// let age = prompt('enter your age?', '');

// if(age < 10) {
//     alert('you are a child');
// }else if(age < 18){
//     alert('you are a teenager ');
// }else{
//     alert('you are an adult');
// }



// let i = 0;

// while(i < 3){
//     alert(i);
//     i++;
// }


// let sum = 0;

// while(true){

//     let value = prompt('enter the value', '');

//     if(!value) break;
//     sum += +value;

    
// }
// alert(sum);



/***********  Functions ************/



// let message2 = " I'm 30 years old"

// function abc(a,b){

//     let message2 = " I'm 25 years old"

//     let message ='My name is '

//     console.log(message + a + b + message2);
// }

// console.log(message2)

// abc('john',' doe');

// // console.log(message)

// console.log(message2);




// function sum(a,b){

//   return 1;
    
// }

// console.log(sum() === undefined)

// // console.log(sum(11,34));




// func();

// function func(){

//     console.log('hello world')
// }


// sayHi();


// let sayHi = function(){

//     console.log('hello world')

// }


// let sum = sayHi; 

// sayHi();
// sum();


// let sum = (a, b) => a + b;

// alert( sum(1, 2) );




// Numbers



// // let num = 10_00_000;

// let num = 1e9;

// let num = 255;

// console.log(num.toString(2));


// let num2 = 12.47756;

// // console.log(Math.round(num2*100) / 100);


// console.log(num2.toFixed(3))

// console.log(parseInt('100px'));


// console.log(parseFloat('12.45em'))





 /*****************String *************/



// let str = 'this is a string';

// // console.log(str[-3]);


// console.log(str.indexOf('is',))




// let str = ' this is a string and is an example'


// console.log(str.slice(-3,-1));

// console.log(str.substring(3,1))


// console.log(str.substr(0,4))









/*********Arrays************/


// let arr = new Array(5);
// console.log(arr);

// let arr = [1,2,3,4,5,6,'apples','mangoes',true,function(){alert('hello world')}];

// // console.log(arr[9]())

// console.log(arr.pop());
// console.log(arr.push('false',45))
// console.log(arr.shift())
// console.log(arr.unshift('23',67))
// console.log(arr)


// let arr2 = [];

// arr2[255] = 1;
// console.log(arr2);
// console.log(arr2.length);

// console.log([2] == [2])



// let arr = [
//    [1,2,3],
//    [4,5,6],
//    [7,8,9]

// ]

// console.log(arr[1][1])


// console.log(arr);


// let arr = ['mango','apples','banana']

// delete arr[2];

// arr.splice(2,0,'grapes')
// console.log(arr)


// arr.forEach(alert)



// let str = 'this is a string';
// // console.log(str);


// let res = '';

// let arr = str.split(' ');

// let str2 = String(arr);
// console.log(str2);

// console.log(arr)

// //  for(let i = 0; i < str2.length;i++){

//      for(let j = str2.length - 1; j >=0;j--){
              
//           res += str2.charAt(j);  
              
//     }
// // }

// console.log(res)



///Objects


// let obj = {

//     name: 'john',

//     "hello1": 1,
//     "hello2": 2,
//     welcome: function(){
//         console.log('welcome')
//     },
//         arr1:['maruti','swift','baleno'],
//         'new car': 'audi',
    
// }

// console.log(obj.name)

// console.log(obj.arr1[1])

// obj['isAdult'] = true;
// console.log(obj)


// console.log(obj["hello1"])

// console.log(Object.keys(obj));

// console.log(Object.values(obj))



// let str ='abcd accb dcab bbca';

// let obj1 = {}


// for(let i of str){

//     if(!obj1[i]){

//         obj1[i] = 1;
//     }
//     else{

//   obj1[i] = obj1[i] + 1;
//     }
// }

// delete obj1[" "]


// console.log(obj1);


// let person = {

//     name: 'john',
//     age:24
// }


// person = null;



// // console.log(person.name)



// let person = {

//     firstName: 'john',
//     age: 24
// }

// let p1 = {

//     lastName: 'doe',
//     __proto__: person

// }


// let p2 =  {

//     isAdult: true,
//     __proto__: p1
// }

// // p1['firstName'] = 'harry'

// console.log(p1.firstName)

// console.log(p2.firstName);


// // let p1 = Object.create(person);










