const express = require("express");
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")

const app = express();
app.use(express.json())

app.post("/user/signup" , (req,res) => {
    const email = req.body.email;
    const password = req.body.password
    const name = req.body.name

    res.json({
        message:"User signup"
    })
})

app.post("user/login" , (req,res) => {
      res.json({
        message:"User login"
    })
})

app.post("/user/purchase" , (req,res) => {
      res.json({
        message:"User will purchase course"
    })
})

app.get("/courses" , (req,res) => {
      res.json({
        message:"User can view all the course that are listed to buy"
    })
})

app.get("user/view-courses" , (req,res) => {
      res.json({
        message:"User can view courses..that they buy"
    })
})

app.listen(3000)