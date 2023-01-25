

const http = require("http");


const server = http.createServer((req,res)=>{

    console.log(req)


    if( req.url === '/home') {

        // res.write("Hello world")

        res.statusCode(500)

        res.write(`
        <h1> Welcome to http server</h1>`)

        res.end();
    }
    else if( req.url === '/contact'){

        res.write('Welcome to contact page');

        res.end();

    }
    else{

        res.end(' error! you are at wrong page');
    }
})



server.listen(5000)

console.log("server is running on port 5000")

