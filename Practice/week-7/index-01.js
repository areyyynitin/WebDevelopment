const express = require("express");
const {UserModel , TodoModel} = require("./db")
const jwt = require("jsonwebtoken")
const JWT_SECRET = "asdfghjkl"

const app = express();
app.use(express.json());


app.post("/signup" , async (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    await  UserModel.insert({
        username:"Nitin@gmaillll.com",
        password:"4321",
        name:"Nitin"
    })

    res.json({
        message:"Yoou are sign up!"
    })
}) 

app.post("/signin" , (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    const user = UserModel.findOne({
        username:username,
        password:password
    })

    if(user){
        const token = jwt.sign({
            
        })
         res.json({
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