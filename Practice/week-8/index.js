const express = require("express");
const {courseRouter}  = require("./routes/course")
const {userRouter} = require("./routes/user")
const {adminRouter} = require("./routes/admin")

const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")

const app = express();
app.use(express.json())

app.use("/api/v1/course" , courseRouter);
app.use("/api/v1/user" , userRouter); 
app.use("/api/v1/admin" , adminRouter)

 
async function main(){
    await mongoose.connect("mongodb+srv://admin:admin123@cluster0.48ahzge.mongodb.net/course-selling")
    app.listen(3000);
    console.log("Listening on 3000") 
}

main()