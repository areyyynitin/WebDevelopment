const fs = require("fs")
// const command = require("commander");

// function viewFile(filename){
//     return new Promise(readFile);
// }

// function readFile(resolve){
//    return   fs.readFile("file.txt","utf-8" , (err,data) => {
//         resolve(data);
//     })

// }
// let word = 1;
// function printFile(content){
//     for(let i =0 ; i<content.length;i++){
//         if(content[i] === " "){
//             word++;
//         }
//     }
//     console.log(`You have ${word} words in this file`);
// }

// viewFile().then(printFile);


function readFile(filename){
    console.log(process.argv)
    fs.readFile(filename,"utf-8" , (err,data) => {
        let total = 1;
        for(let i=0;i<data.length;i++){
            if(data[i] === " "){
                total++;
            }
        }
        console.log(`You have ${total} words in this ${filename}`);
    })

}

readFile(process.argv[2])