const fs = require("fs")
const express = require("express")

const app = express();


// route hanndles
app.get("/" , (req,res) => {
    res.send("Hello Ji saaryaaane")
})

app.get("/nitin" , (req,res) => {
    res.send("Hello Ji saaryaaane from nitin")
})

app.post("/" , (req,res) => {
    res.send("Hello Ji saaryaaane from nitin")
})

app.listen(3000)