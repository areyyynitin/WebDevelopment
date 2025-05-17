const express = require("express");
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")

const app = express();
app.use(express.json())

app.post("/user/signup" , (req,res) => {

})

app.post("user/login" , (req,res) => {

})

app.post("user/puchase-courses" , (req,res) => {

})

app.get("user/view-all-courses" , (req,res) => {

})

app.get("user/view-courses" , (req,res) => {

})

app.listen(3000)