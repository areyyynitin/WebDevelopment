// const fs = require('fs');

// function readFile(fileName) {
//     return new Promise((resolve, reject) => {
//         willReadFile(fileName, resolve, reject); // pass fileName here
//     });
// }

// function willReadFile(fileName, resolve, reject) {
//     fs.readFile(fileName, "utf-8", (err, data) => {
//         if (err) reject(err);
//         else resolve(data);
//     });
// }

// function callBack(content) {
//     console.log(content);
// }

// readFile("3-read-from-file.md").then(callBack).catch(console.error);


let fs = require("fs");

function readFile(fileName){
    return new Promise( ( resolve , reject) => {
        willReadFile(fileName,resolve,reject);
    } );

}

    function willReadFile(fileName , resolve , reject){
        fs.readFile(fileName , "utf-8" , (err,data) => {
            if(err) reject(err);
            else resolve(data)
        })
    }

    function callBack(content){
        console.log(content)
    }

readFile('3-read-from-file.js').then(callBack).catch(console.error);