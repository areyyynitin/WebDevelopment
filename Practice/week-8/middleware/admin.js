const jwt = require("jsonwebtoken")
const {JWT_ADMIN_SECRET} = require("../config")


function adminMiddleware(req,res,next){
    const token = req.headers.token;
    const decoded = jwt.verify(token,JWT_ADMIN_SECRET);

    if(decoded){
        req.userId = decoded.id;
        next()
    } else{
        req.status(403).json({
            message:"You are not sign in"
        })
    }
}

module.exports = {
    adminMiddleware:adminMiddleware
}