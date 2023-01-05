 /*
 
    JSON FORMAT

    DATA TYPES allowed => 
    (Boolean,Arrays,String,Object,Number,Null (BASONN) )

 */


    // JSON EXAMPLE

    // const jsonData = {

    //     "name" : "john doe",

    //     "age" : 24 , 

    //     "address" : "New Delhi, India"
    // }    

    // we need to add .json file extension to see the data in json format




// converting object into to JSON format
    
    let persons = 
[
    {
        name:"kartik",
        age:22,
        favColor:["red","green","blue"]
    },
    {
        name:"vivek",
        age:23,
        favColor:["red","green","blue"]
    },
    {
        name:"himanshu",
        age:21,
        favColor:["red","green","blue"]
    }
];



    console.log(persons,typeof persons);

    for(let person of persons){

        person = JSON.stringify(person);  // converts to JSON STRING

        console.log(person);

   person = JSON.parse(person); // CONVERTS JSON STRING INTO OBJECT

    console.log(person);

    }


 
    

