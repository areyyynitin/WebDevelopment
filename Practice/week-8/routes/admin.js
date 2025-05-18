const {Router, response} = require("express")
const adminRouter = Router();
const {adminModel} = require("../db")
const {z} = require("zod")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const JWT_ADMIN_SECRET = "adminSECRET"

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

adminRouter.post("/" , (req,res) => {
    res.json({
        message:"Admin create courses point"
    })
})

adminRouter.put("/" , (req,res) => {
    res.json({
        message:"Admin can update course content"
    })
})
adminRouter.get("/bulk" , (req,res) => {
    res.json({
        message:"admin can  delete course"
    })
})



module.exports  = {
    adminRouter:adminRouter
}