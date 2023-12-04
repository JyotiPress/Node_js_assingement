const fs = require('fs');

const append_file = fs.appendFile('../02_&_03_project/nodejs_architecture.txt',' ____________________________Node js is a plateform  that utilie Javascript and is primarily for developing web application that highly focused on input/output ooperation.', (error, data)=>{
    if (error) {
        console.log('Your file is not append', error);
        return error;
    }
    else{
        console.log('File is appende', data);
        return data;
    }

})
console.log(append_file);