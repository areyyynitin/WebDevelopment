// // Read file
// let fs = require('fs');

// function readFile(fileName){
//     return new Promise((resolve,reject) => {
//         readFromFile(fileName , resolve , reject);
//     });
// }

// function readFromFile(fileName , resolve , reject){
//     fs.readFile(fileName , 'utf-8' , (data , err) => {
//         if (err) reject(err) 
//         else resolve(data)
//     })
// }

// function callBack(content){
//     console.log(content);
// }

// readFile('3-read-from-file.js').then(callBack).catch(console.error);








// Write File
const fs = require('fs').promises;

async function writeFile(fileName , content){
    try {
      await fs.writeFile(fileName , content , 'utf-8');
        console.log('File written successfully');
    } catch (error) {
        console.log("File failed" , error);
        
    }
}

writeFile('4-writeFile.txt' , "Hello Nitin Prajapati..Good EVENING");