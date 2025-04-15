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

const a = require("fs");   //external library known as file system
let contents = a.readFileSync("a.txt" , "utf-8"); //most human readable format utf-8
console.log(contents)
contents = a.readFileSync("b.txt" , "utf-8");
console.log(contents)


// i stopp at 57:30 next stop is asynchornous code ccode and call back

