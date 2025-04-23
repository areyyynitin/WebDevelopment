// function setTimeoutPromisified(ms){
//     return new Promise(resolve => setTimeout(resolve,ms));
// } 

function setTimeoutPromisified(ms){
    return new Promise((resolve)  =>  setTimeout(resolve,ms))
}

function callBack(){
    console.log("Hi")
}

// setTimeout(callBack,2000);

// promise  with identation
// setTimeoutPromisified(1000).then(() => {
    //     console.log("Hi")
    //     setTimeoutPromisified(3000).then( () => {
        //         console.log("Hello")
        //         setTimeoutPromisified(5000).then( () => {
            //             console.log("Hello there")
            //         })
            //     })
            // }); 
            
            
// promise  without identation that is promisified setTimeout...it also known as promise chaining
setTimeoutPromisified(1000).then( () => {
    console.log("HI");
    return setTimeoutPromisified(3000);
}).then( () => {
    console.log("Hello");
    return setTimeoutPromisified(5000);
} ).then ( () => {
    console.log("Hello there");
})
