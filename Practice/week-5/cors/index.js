const express = require("express")
const cors = require("cors")

const bodyParser = require("body-parser")
const app = express()
app.use(bodyParser.json())
app.use(cors())

app.post("/sum" , (req,res)=>{
    console.log(req.body)
    const a = parseInt(req.body.a)
    const b= parseInt(req.body.b)

    res.json({
        answer:a+b
    })
})
app.listen(3000)