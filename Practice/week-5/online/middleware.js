const express = require("express")

const app = express()
let requestCount = 0;

function requestCounter(req,res,next){
    requestCount +=1;
    console.log(`Request count = ${requestCount}`)
    req.requestCount = requestCount
    req.name ="RandomName"
    next();
    // res.json({
    //     message:"I ended request early"
    // })
}

app.use(requestCounter)

function add(req,res){
    const a = parseFloat(req.params.a)
    const b = parseFloat(req.params.b)
    console.log(req.name)
    req.name = "NameRandom"
    console.log(req.name)
    
    res.json({
        addition: a+b,
       
        
    })
}

function mul(req,res){
    const a = parseFloat(req.params.a)
    const b = parseFloat(req.params.b)
    
    res.json({
        multiplication: a*b
        
})
}

function admin(req,res){
    res.json({
        message: `Total number of request ${requestCount}`
    })
}
app.get("/add/:a/:b"  ,add)
app.get("/multiply/:a/:b" ,mul)
app.get("/admin" ,admin)

app.listen(3000)