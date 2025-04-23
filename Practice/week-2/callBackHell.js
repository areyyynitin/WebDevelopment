// setTimeout( () => {
//     console.log('HI');
//     setTimeout( () => {
//         console.log('Hello');  setTimeout( () => {
//             console.log('Hello there');
//         },5000)
//     },3000)
// },1000);



// alternative solution
function step1(){
    console.log("Hi");
    setTimeout(step2 , 3000);
}

function step2(){
    console.log("Hi");
    setTimeout(step3 , 5000);
}

function step3(){
    console.log("Hi");
    
}

setTimeout(step1 , 1000);