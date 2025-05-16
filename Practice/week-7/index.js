const express = require("express")
const {UserrrModel,TodoooModel} = require("./database")
const jsonwebtoken = require("jsonwebtoken")
const mongoose = require("mongoose")
const JWT_SECRET = "nitinPrajapat"
mongoose.connect("mongodb+srv://admin:admin123@cluster0.48ahzge.mongodb.net/todoriyal").then(() => console.log("Connected to DB")).catch(err => console.log("can't connected", err));
const brcypt = require("bcrypt")
const {z} = require("zod")
const app = express();
app.use(express.json())
    

app.post("/signup" ,async (req,res) => {
    const requiredBody = z.object({
        email: z.string().min(8).max(80).email(),
        password: z.string().min(8).max(35),
        name:z.string()
    })

    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name

    const safedParsedWithSucceess = requiredBody.safeParse(req.body);
    if(!safedParsedWithSucceess.success){
        res.json({
            message:"incorrect format",
            error:safedParsedWithSucceess.error
        })
        return
    }

     const hashedPassword = await brcypt.hash(password,5)
     await UserrrModel.create({
        email:email,
        password:hashedPassword,
        name:name
     })

     res.json({
        message:"You are sign up!"
     })
})

app.listen(3000)