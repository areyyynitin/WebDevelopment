const {Router} = require("express")
const adminRouter = Router();

adminRouter.post("/signup" , (req,res) => {
    res.json({
        message:"Admin signup point"
    })
})

adminRouter.post("/login" , (req,res) => {
    res.json({
        message:"Admin signin point"
    })
})

adminRouter.post("/course" , (req,res) => {
    res.json({
        message:"Admin create courses point"
    })
})

adminRouter.put("/course" , (req,res) => {
    res.json({
        message:"Admin can update course content"
    })
})

adminRouter.get("/course/bulk" , (req,res) => {
    res.json({
        message:"admin can  delete course"
    })
})



module.exports  = {
    adminRouter:adminRouter
}