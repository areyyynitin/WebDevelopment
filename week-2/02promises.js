// function main(resolve){
//     setTimeout(resolve,2000); //whenever i call resolve it pass to callback fucnction
// }

// let promise = new Promise(main);
// // console.log(promise);

// function callBack(){
//     console.log('Promise succecced');
// }


// promise.then(callBack);


function setPromise(ms){
    return new Promise( resolve => setTimeout(resolve,ms) )
}

function callBack(){
    console.log('I am completing my promise');
}
 
setPromise(2000).then(callBack);