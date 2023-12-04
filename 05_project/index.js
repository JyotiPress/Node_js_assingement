const fs = require('fs');

const deleteFile= fs.rm('input.txt',(error, data)=>{
    if (error){
        console.log('File is showin error for deleting', error);
    }
    console.log('File is successufully deleted', data);
})
console.log(deleteFile);
// in terminal, print consloe.log(deleteFile), then delete input.txt file.