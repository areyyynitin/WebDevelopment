const express = require("express");
const brcypt = require("bcrypt");
const {UserModel , TodoModel} = require("./db")
const jwt = require("jsonwebtoken");
const  mongoose = require("mongoose");
const JWT_SECRET = "asdfghjkl"
mongoose.connect("mongodb+srv://admin:admin123@cluster0.48ahzge.mongodb.net/todo-2-0").then(() => console.log("Connected to DB")).catch(err => console.error("DB connection error:", err));


const app = express();
app.use(express.json());

let errorthrown = false;
app.post("/signup" , async (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    try{
    const hashedPassword =await brcypt.hash(password,5);
    console.log(hashedPassword)
    await  UserModel.create({
        username:username,
        password:hashedPassword,
        name:name
    })
} catch(e){
    console.log("error while putting this into DB")
    res.json({
        message:"Heyy dear...Username are already exist"
    })
    errorthrown=true;
}
    if(!errorthrown){
    res.json({
        message:"Yoou are sign up!"
    })
}
}) 

app.post("/signin" , async (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    const response =  await UserModel.findOne({
        username:username
        // password:password
    })

    if(!response){
        res.status(403).json({
            messsage:"User does not exit"
        })
        return
    }
    // console.log(user);

   const passwordMatch =await brcypt.compare(password , response.password)
    if(passwordMatch){
        const token = jwt.sign({
            id:response._id.toString()
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

app.post("/todo" ,auth, (req,res)=>{
    const userId = req.userId
    const title = req.body.title

    TodoModel.create({
        title,
        userId
    })

    res.json({
        userId:userId
    })
})

app.get("/todos" ,auth, async (req,res)=>{
    const userId = req.userId
    const todos = await TodoModel.find({
        userId:userId
    })

    res.json({
       todos
    })

})


function auth(req,res,next){
    const token = req.headers.token;
    const decodeddata = jwt.verify(token,JWT_SECRET);

    if(decodeddata){
        req.userId = decodeddata.id
        next()
    } else{
        res.status(403).json({
            message:"Incorrect crediantials"
        })
    }
}

app.listen(3000);