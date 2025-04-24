const express = require("express");

const app = express()

function sum(a,b){
    return a+b;
}

app.get("/" , (req,res) => {
    const a = req.query.a;
    const b = req.query.b;
    const ans = sum(a,b);
    res.send(ans);
})

app.listen(3000)