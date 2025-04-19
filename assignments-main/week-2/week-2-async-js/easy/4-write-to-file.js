
let fs = require('fs');

function readFile(fileName){
    return new Promise((resolve,reject) => {
        readFromFile(fileName , resolve , reject);
    });
}

function readFromFile(fileName , resolve , reject){
    fs.readFile(fileName , 'utf-8' , (data , err) => {
        if (err) reject(err) 
        else resolve(data)
    })
}

function callBack(content){
    console.log(content);
}

readFile('4-write-to-file.md').then(callBack).catch(console.error);