// function setTimeoutPromisified(ms){
//     return new Promise(resolve => setTimeout(resolve,ms));
// } 

function setTimeoutPromisified(ms){
    return new Promise((resolve)  =>  {
        return setTimeout(resolve,ms);
    })
}

function callBack(){
    console.log("Hello")
}

// setTimeout(callBack,2000);
setTimeoutPromisified(3000).then(callBack);   