// function main(resolve){
//     setTimeout(resolve,2000); //whenever i call resolve it pass to callback fucnction
// }

// let promise = new Promise(main);
// // console.log(promise);

// function callBack(){
//     console.log('Promise succecced');
// }


// promise.then(callBack);

const a = require("fs").promises;
function setPromise(fileName){
    return a.readFile(fileName , "utf-8");
    }


function callBack(content){
    console.log('I am completing my promise');
    console.log(content)
}
 
setPromise('a.txt').then(callBack);