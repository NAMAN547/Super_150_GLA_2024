/*** exploring th document object ****/


// console.dir(document);

// console.log(document.domain);

// console.log(document.title);

// console.log(document.URL);

// console.log(document.body);

// console.log(document.head);


// console.log(document.links);


// console.log(document.all);


// document.all[5].textContent = 'hello world';


// console.log(document.all[12].innerText)



/****  Querying Document *****/




/***** getElementById  ******/



// let headerTitle = document.getElementById('main-header');


// headerTitle.style.backgroundColor = 'red';

// headerTitle.innerHTML = '<h3>This is a H3 </h3>';

// console.log(headerTitle);





/*** getElementByClassNname ****/




// var items = document.getElementsByClassName("list-group-item");


// console.log(items);

// for(let i = 0; i <items.length; i++){

//     // items[i].style.backgroundColor = 'lightgrey';

//     Object.assign(items[i].style,{backgroundColor: 'red',fontWeight: 'bold'})
// }




/***** getElementByTagName ****/




// var list = document.getElementsByTagName("li");


// console.log(list);

// for(let i = 0; i <list.length; i++){

//     // items[i].style.backgroundColor = 'lightgrey';

//     Object.assign(list[i].style,{backgroundColor: 'red',fontWeight: 'bold'})
// }



/**** QuerySelector  ****/




// var heading = document.querySelector('.title');


// heading.style.backgroundColor = 'green'

// var input = document.querySelector('input');

// input.value = 'Hello World';


// var submit = document.querySelector('input[type="submit"]');

// submit.value = "SEND";






/***** querySelectorAll *****/


// var heading = document.querySelectorAll('ul');

// console.log(heading)

// for(let i =0;i <heading.length;i++){

//     heading[i].style.backgroundColor = 'green';


// }



/*** Traversing dom*** */



var itemList = document.getElementById('items');


// parentNode

// console.log(itemList.parentNode);

// itemList.parentNode.style.backgroundColor = 'lightgrey';




// parentElement
// console.log(itemList.parentElement);


//ChildNodes

// console.log(itemList.childNodes);

// console.log(itemList.children)

// itemList.children[1].style.backgroundColor = 'yellow';


// console.log(itemList.nextSibling);


// console.log(itemList.nextElementSibling)



// Events


// function buttonClick(){

//     console.log('hello world')
// }


// var button = document.querySelector('#btn');


// button.addEventListener('click',addEvent);


// function addEvent(e){

//     console.log(e);

//     console.log(e.target);

//     // console.log(e.clientX);

//     // console.log(e.clientY);

//     // console.log(e.offsetX);
//     // console.log(e.offsetY);

//     // console.log(e.ctrlKey);
//     // console.log(e.altKey);
//     // console.log(e.shiftKey);


//     // console.log(e.value);




//     // // console.log('1');

//     // var mainTitle = document.getElementById('main-title');
    

//     // console.log(mainTitle);

//     // mainTitle.innerText= 'changed';


// }

var button = document.querySelector('#btn');

var form = document.getElementById('addForm');




// button.addEventListener('click',runEvent);
// button.addEventListener('dblclick',runEvent);

// button.addEventListener('mousedown',runEvent);

var newDiv = document.getElementById('main-div');

newDiv.addEventListener('mouseenter',runEvent);

// newDiv.addEventListener('mouseleave',runEvent);

// newDiv.addEventListener('mouseover',runEvent);

// newDiv.addEventListener('mouseout',runEvent);

// newDiv.addEventListener('mousemove',runEvent);






// function runEvent(e){

//     console.log("Event type :" + e.type);



   


// }















