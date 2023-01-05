
const p = new Promise((function(resolve,reject){    // Using Promise Construcutor to intialise Promise p

    setTimeout(()=>{

        let randomNum = Math.floor(Math.random() * 10);

        console.log(randomNum)

        if(randomNum % 2 == 0){

            resolve(randomNum)
        }else{

            reject();
        }
    },2000)
}))

p.then((data)=>{

    console.log(data)
    console.log("resolve")
    return "abc";
}).then((data)=>{
    console.log(data)
    
}).catch((err)=>{

    console.log("reject")
})