const path = require("path");
const fs = require('fs');


const p1 = path.join(__dirname, 'inp1.txt');
const p2 = path.join(__dirname, 'inp2.txt');


const ans =[];

fs.readFile(p1 , (err, data)=>{

    if(err) throw err;

     arr1 = data.toString().split('\r\n');

      ans.push(...arr1);

      ans.join(' ');



    fs.readFile(p2, (err,data)=>{

        if(err) throw err;
        arr2 = data.toString().split('\r\n');
        ans.push(...arr2);

         var res =  ans.sort((a,b)=> a-b).join('\r\n');

       

         
    fs.writeFile('output.txt' , res , (err)=>{

        if(err) throw err;

        console.log(" file written sucessfully");


    
})

})
})





























// let count = 0;

// function cb(err,data){

//     count += 1;

//     if(count <=3){

//         if(!err){

//             console.log(data)
//         }else{
//             console.log(err);
//         }
//         fs.readFile('q' + (count + 1) + '.html', 'utf-8', cb)
//     }
// }

// fs.readFile('q1.html','utf-8', cb);\



// function cb(err,data){

//     if(!err){
//         console.log(data);

//     }else{

//         console.log(err)
//     }
// }

// for(let i = 1; i <=3; i++){

//     fs.readFile('q' + i + '.html','utf-8', cb)
// }






