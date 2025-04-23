let files = require("fs");

function printFileData(err,data){
    if(err){
        console.log("File not found")
    } else{
        console.log(data)
    }
    
}

files.readFile("aaa.txt" , "utf-8" , printFileData) 
files.readFile("b.txt" , "utf-8" , printFileData) 

console.log("Hello") 