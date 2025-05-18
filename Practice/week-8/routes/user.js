const {Router} = require("express")
const {z} = require("zod")
const {userModel, purchaseModel} = require("../db")
const userRouter = Router();
const bcrypt = require("bcrypt");
const jwt  = require("jsonwebtoken");
const {JWT_USER_SECRET} = require("../config")
const {userMiddleware} = require("../middleware/user")

    userRouter.post("/signup" ,async (req,res) => {
        const requiredBody = z.object({
            email:z.string().email().min(5).max(100),
            password: z.string(),
            firstName:z.string().min(5).max(50) ,
            lastName: z.string().min(5).max(50)
        })
        const {email,password,firstName,lastName} = req.body

        const parsedDataWithSuccess = requiredBody.safeParse(req.body)
        if(!parsedDataWithSuccess.success){
            res.json({
                message:"Inccorect username",
                error:parsedDataWithSuccess.error
            })
        }

        const hashedPassword =await bcrypt.hash(password,5);
        try{
        await userModel.create({
            email:email,
            password:hashedPassword,
            firstName:firstName,
            lastName:lastName
        })
    }catch(e){
        res.json({
            message:"Sign up failed",
            error:e
        })
    }
        res.json({
            message:"Sign up successful"
        })
    })

    userRouter.post("/login" ,async (req,res) => {
        const {email,password} = req.body;

        const response = await userModel.findOne({
            email:email
        })
        if(!response){
            res.json({
                message:"Username doesn't exist"
            })
        }

        const passwordMatch =await bcrypt.compare(password,response.password)
        if(passwordMatch){
            const token = jwt.sign({
                id:response._id.toString()
            },JWT_USER_SECRET)
            res.json({
               token:token
            })
        } else{
            res.status(403).json({
                message:"Incorrect credintials"
            })
        }
    })

    userRouter.get("/purchase" ,userMiddleware, async(req,res) => {
        const userId = req.userId;

       const purchases =  await purchaseModel.findOne({
            userid
        })
        res.json({
            purchases
        })
    })

    
module.exports ={
    userRouter:userRouter
}