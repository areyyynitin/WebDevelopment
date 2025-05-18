const {Router, response} = require("express")
const adminRouter = Router();
const {adminModel, courseModel} = require("../db")
const {z} = require("zod")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const {JWT_ADMIN_SECRET} = require("../config");
const { adminMiddleware } = require("../middleware/admin");
const admin = require("../middleware/admin");

adminRouter.post("/signup" ,async (req,res) => {
    const requiredBody = z.object({
        email:z.string().email().min(5).max(100) ,
        password: z.string(),
        firstName:z.string().min(5).max(50) ,
        lastName: z.string().min(5).max(50)
    })

    const email = req.body.email;
    const password = req.body.password;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;

    const parsedDataWithSuccess = requiredBody.safeParse(req.body)
    if(!parsedDataWithSuccess.success){
        res.json({
            message:"Signup failed",
            error:parsedDataWithSuccess.error
        })
        return
    }

    const hashedPassword =await bcrypt.hash(password,5)
    await adminModel.create({
        email:email,
        password:hashedPassword,
        firstName:firstName,
        lastName:lastName
    })
    res.json({
        message:"Sign up successfull"
    })
})

adminRouter.post("/login" ,async (req,res) => {
    const email = req.body.email;
    const password = req.body.password;

    const response = await adminModel.findOne({
        email:email
    })

    if(!response){
        res.json({
            message:"User doesn't exist"
        })
    }

    const passwordMatch = await bcrypt.compare(password,response.password);
    if(passwordMatch){
        const token = jwt.sign({
            id:response._id.toString()
        },JWT_ADMIN_SECRET)
        res.json({
            token:token
         })
    } else{
        res.status(403).json({
            message:"Incorrect credintials"
        })
    }
})

adminRouter.post("/course" , adminMiddleware, async(req,res) => {
    const adminId = req.userId
    const {title,description,imageURL,price} = req.body

    const course = await courseModel.create({
        title,
        description,
        imageURL,
        price,
        creatorId:adminId
    })
    res.json({
        message:"Admin create courses point",
        course:course._id
    })
})

adminRouter.put("/course" ,adminMiddleware, async (req,res) => {
    const adminId = req.userId
    const {title,description,imageURL,price,courseId} = req.body

    const course = await courseModel.updateOne({
        _id:courseId,
        creatorId:adminId
    },{
        title,
        description,
        imageURL,
        price
    })
    res.json({
        message:"Admin update courses",
        course:course._id
    })
})


adminRouter.get("/course/bulk" ,adminMiddleware,async (req,res) => {
    const adminId = req.userId
    
    const courses = await courseModel.find({
        creatorId:adminId
    })
    res.json({
        message:"Admin update",
        courses
    })
})



module.exports  = {
    adminRouter:adminRouter
}