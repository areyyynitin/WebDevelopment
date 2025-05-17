const express = require("express");
const {courseRouter}  = require("./routes/course")
const {userRouter} = require("./routes/user")

const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")

const app = express();
// app.use(express.json())

app.use("/user" , userRouter);
app.use("/course" , courseRouter);


app.listen(3000)