const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const objectId = mongoose.ObjectId
mongoose.connect("mongodb+srv://admin:admin123@cluster0.48ahzge.mongodb.net/course-selling").then( () => { console.log("Connected to DB") }).catch( e => console.error("Cannot connected to DB" , e))

const userSchema = new Schema({
    email:{type:String,unique:true},
    password:String,
    firstName:String,
    lastName:String
})

const adminSchema = new Schema({
    email:{type:String,unique:true},
    password:String,
    firstName:String,
    lastName:String
})

const courseSchema = new Schema({
    title:String,
    description:String,
    price:Number,
    imageURL:String,
    creatorId:objectId
})

const purchaseSchema = new Schema({
    courseId: objectId,
    userid:objectId
})

const  userModel = mongoose.model("user",userSchema);
const adminModel = mongoose.model("admin" , adminSchema);
const courseModel = mongoose.model("course" , courseSchema);
const purchaseModel = mongoose.model("purchase" , purchaseSchema);

module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel
}