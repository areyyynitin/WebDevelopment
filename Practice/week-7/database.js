const mongoose = require("mongoose")
const Schema = mongoose.Schema
const objectId = mongoose.ObjectId

const User = new Schema({
    email : {type:String , unique:true},
    password:String,
    name:String
})

const Todo = new Schema({
    description:String,
    done:Boolean,
    userId:objectId
})

const UserrrModel = mongoose.model("Naives" , User)
const TodoooModel = mongoose.model("task" , Todo)




module.exports = {
    UserrrModel:UserrrModel,
    TodoooModel:TodoooModel
}