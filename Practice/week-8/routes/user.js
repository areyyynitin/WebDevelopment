const {Router} = require("express")

const userRouter = Router();

    userRouter.post("/signup" , (req,res) => {
        const email = req.body.email;
        const password = req.body.password
        const name = req.body.name

        res.json({
         message:"User signup"
        })
    })

    userRouter.post("/login" , (req,res) => {
        res.json({
         message:"User login"
        })
    })

    userRouter.get("/purchase" , (req,res) => {
        res.json({
         message:"User can view courses..that they buy"
        })
    })


module.exports ={
    userRouter:userRouter
}