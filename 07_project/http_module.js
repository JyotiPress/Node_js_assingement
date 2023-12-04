const httpModule = require('http');

const Server = httpModule.createServer((request, responce)=>{
    if (request.url == '/') {
        responce.write('<h1> I am happy to learn full stack web developement from PW Skills!</h1>');        
    }
    responce.end();
});
Server.listen(5000);

console.log("http module is running on port 5000");