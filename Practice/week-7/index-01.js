const express = require("express");
const {UserModel , TodoModel} = require("./db")
const jwt = require("jsonwebtoken");
const { default: mongoose } = require("mongoose");
const JWT_SECRET = "asdfghjkl"
mongoose.connect("mongodb+srv://admin:admin123@cluster0.48ahzge.mongodb.net/todo-2").then(() => console.log("Connected to DB")).catch(err => console.error("DB connection error:", err));


const app = express();
app.use(express.json());


app.post("/signup" , async (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    await  UserModel.create({
        username,
        password,
        name
    })

    res.json({
        message:"Yoou\ are sign up!"
    })
}) 

app.post("/signin" , async (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    const user =  await UserModel.findOne({
        username:username,
        password:password
    })

    console.log(user);

    if(user){
        const token = jwt.sign({
            id:user._id
        },JWT_SECRET)
         res.json({
            token:token
         })
    } else{
        res.status(403).json({
            message:"Incorrect crediantials"
        })
    }
})

app.post("/todo" , (req,res)=>{

})

app.get("/todos" , (req,res)=>{

})

app.listen(3000);