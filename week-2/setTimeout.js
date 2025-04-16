console.log("Hello Good morning")

function timeout(){
    console.log("Good afternoon");
}
timeout();
setTimeout(timeout , 2000);

let c = 0
for(let i =0 ; i<10;i++){
    c=c+1; 
}
console.log("Good evening"); 

// 1 line will be print
// in setTimeout function was called but it wait in webApis to ccomplete their timeout,after then he go in callback queue then it transfer into call stack setTimeout called timeout function then it display timeout function
// between the timeout the next will be print which is good evening  

 