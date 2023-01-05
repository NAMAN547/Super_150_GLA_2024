

try {

    // code...
  
  } catch (err) {
  
    // error yaha handle hoga

    // err is an error object 
  
  }



  try {

    console.log(('Start of try block'));  

  // code execute hoga
  
    console.log(('End of try block'));   



  } catch (err) {
  
    console.log((' error aagya hai ')); 
  
  }





  try {

    console.log(('Start of try block'));  

     jbbchdbhdbchdb;   // random error create kiya
  
    console.log(('End of try block'));   



  } catch (err) {

    console.log(err); // err ek object hai isme error se related details milengi
  
    console.log((' error aagya hai, error theek kar ')); 
  
  }


  
  // try/catch synchronously work krta hai

  try {
    setTimeout(function() {

      chbcbhbdshds; // error diya

    }, 1000);

  } catch (err) {

    console.log(( "nhi chalega" ));


  }


  // setTimeout baad mai execute hoga and try catch block mai error nhi handle hoga




  // try catch ka real example


  let json = "{ iss jason mai dikkat hai }";

try {

  let user = JSON.parse(json); // isme error show hoga kyuki json parse nhi hua


} catch (err) {
 
  alert( " abe json theek kr" );
  alert( err.name );
  alert( err.message );
}



// apna error bhi bna sakte hai using javascript built-in constructor;


var error = new Error("Yaha error ka message aayega");

var error = new SyntaxError("Yaha error ka message aayega");

var error = new ReferenceError("Yaha error ka message aayega");




// iss json mai name nhi hai toh apna error diya


let json = '{ "age": 30 }'; // incomplete data

try {

  let user = JSON.parse(json); // <-- no errors

  if (!user.name) {

    throw new SyntaxError("Incomplete data: json mai name nhi hai"); 

  }

  console.log(( user.name ));

} catch (err) {

  console.log("error aagya"); 
}