const express = require("express")

const app = express();

app.get("/add/:a/:b" , (req,res) => {
        const a = parseFloat(req.params.a);
        const b = parseFloat(req.params.b);

        res.json({
            add: a+b
        })
})

app.get("/subtract/:a/:b" , (req,res) => {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);

        res.json({
            subtract: a-b
        })
    
})

app.get("/multiple/:a/:b" , (req,res) => {
    const a = parseFloat(req.params.a)
    const b = parseFloat(req.params.b)

    res.json({
        multiply:a*b
    })
})

app.get("/divide/:a/:b" , (req,res) => {
    const a = parseFloat(req.params.a)
    const b = parseFloat(req.params.b)

    res.json({
        divide:b/a
    })
})



app.listen(3001);