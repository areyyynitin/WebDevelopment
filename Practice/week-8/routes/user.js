const {Router} = require("express")

const userRouter = Router();

    userRouter.post("/user/signup" , (req,res) => {
        const email = req.body.email;
        const password = req.body.password
        const name = req.body.name

        res.json({
         message:"User signup"
        })
    })

    userRouter.post("user/login" , (req,res) => {
        res.json({
         message:"User login"
        })
    })

    userRouter.get("/user/purchase" , (req,res) => {
        res.json({
         message:"User can view courses..that they buy"
        })
    })


module.exports ={
    userRouter:userRouter
}