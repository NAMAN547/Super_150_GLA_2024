// Yeh banaya sabse pehle ajax ko bhejne ke liye object xhr
const xhr  = new XMLHttpRequest();

// Agar request success hoti hai toh hum, onload event chalaenge
xhr.onload = function(){
    let ul = document.querySelector('#facts');
    console.log("Success par this",this.response);
    let jsonData = this.response;
    let catFacts = JSON.parse(jsonData);
    // console.log(catFacts.data);

    const getCatFacts = catFacts.data;
    getCatFacts.forEach(res => {
        // console.log(res);
        let getFact = res.fact;
        // console.log(getFact);   
        let li = document.createElement('li');
        li.innerText = getFact;
        li.classList.add('fact-li');
        ul.appendChild(li);
    });
}

// Agar request fail hoti hai toh hum, onerror event chalaenge

xhr.onerror = function(){
    console.log("Error aa gaya");
}

// Rquest kis URL par jaegi usko set karo
xhr.open("GET","https://catfact.ninja/facts");

// Ab request ko bhejdo
let btn = document.querySelector('#btn');
btn.addEventListener('click',(e)=>{
    xhr.send();
})