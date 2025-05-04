const express = require("express")
const bodyParser = require("body-parser")

const app = express();

// function middleware(req,res,next){


app.use(bodyParser.json())

function divide(req,res){
    console.log(req.body)
    const a = parseFloat(req.body.a)
    const b = parseFloat(req.body.b)

    res.json({
        result : b/a
    })
}

app.post("/divide/" , divide)

app.listen(3001);