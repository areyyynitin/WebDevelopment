function sum(n){
    let ans = 0;
    for(let i=0 ; i<=n ; i++){
        ans = ans +i;
    }
    return ans;

    // return n*(n+1)/2;
}

let answer = sum(6);
// console.log(answer)

const a = require("fs"); 
const contents = a.readFileSync("notes.txt" , "utf-8");
console.log(contents + " ")

function summ(n){
    let ans = 0;
    for(let i=0 ; i<=n ; i++){
        ans = ans +i;
    }
    return ans;
    
    // return n*(n+1)/2;
}

let answers = summ(6);


