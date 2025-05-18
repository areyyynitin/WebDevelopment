const {Router} = require("express");
const { userMiddleware } = require("../middleware/user");
const { purchaseModel, courseModel } = require("../db");
const courseRouter = Router();

    

    courseRouter.post("/purchase" ,userMiddleware,async (req,res) => {
        const {userId , courseId} = req.body

        await purchaseModel.create({
            userid,
            courseId
        })
        res.json({
          message:"User succesfully bought the courses"
        })
    })

    courseRouter.get("/preview" ,async (req,res) => {
        const courses = await courseModel.find({})
        res.json({
            courses
        })
    })


module.exports = {
    courseRouter:courseRouter
}