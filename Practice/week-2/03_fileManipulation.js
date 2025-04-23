// const required = require("fs")
// let content = required.readFileSync("a.txt","utf-8")
// console.log(content);

const { fstat } = require('fs');

// cleanFile("c.txt" , clean);

// function clean(){
//     console.log('Line is cleaned')
// }

// file read

const b = require('fs').promises;
// function completePromise(fileName){
//     return b.readFile(fileName,'utf-8');
// }

// function callBack(content){
//     console.log(content)
// }

// completePromise("b.txt").then(callBack)

let required = require('fs');
function readFile(fileName){
    return new Promise(willReadFile);
} 

function willReadFile(resolve){
    required.readFile("c.txt" , "utf-8" , function(err,data){
        resolve(data)
    })
}

function callBack(content){
    console.log(content)
}


let  p =readFile()

p.then(callBack)


