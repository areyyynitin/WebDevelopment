const express = require("express");

const app = express()

function calculatedSum(n){
    let sum=0;
    for(let i=0;i<=n;i++){
        sum = i+sum;
    }
    return sum;
}



// this is just a syntax of express,,that say give me two argument....1)listen after localhost:3000/ "/" =>  listen after this.
app.get("/" , (req,res) => {
    const n = req.query.n;
    const ans = calculatedSum(n)
    res.send("Hi hello namaste " + ans)

})

app.listen(3000);

