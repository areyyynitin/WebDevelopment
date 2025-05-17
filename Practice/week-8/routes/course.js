const {Router} = require("express")
const courseRouter = Router();

    courseRouter.get("/preview" , (req,res) => {
        res.json({
         message:"User can view all the course that are listed to buy"
        })
    })

    courseRouter.post("/purchase" , (req,res) => {
        res.json({
          message:"User can view courses..that they buy"
        })
    })


module.exports = {
    courseRouter:courseRouter
}