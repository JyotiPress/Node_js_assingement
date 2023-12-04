const fs = require('fs');
 
// asynchronus way to read file
const fsFile = fs.readFile('nodejs_architecture.txt',(error, data)=>{
    if(error){
        console.log("Error", error);
        return error
    }
    //read 'nodejs_architecture.txt'
        console.log("Data", data.toString());
        return data;


})
console.log(fsFile);