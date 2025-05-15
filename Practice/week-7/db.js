const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const objectId = mongoose.ObjectId;

const User = new Schema({
    username:{type:String , unique:true},
    password:String,
    name:String
})

const Todo = new Schema({
    description:String,
    done:Boolean,
    userId:objectId
})

 // mongoose.model("users",User) => users refers to mongo compass database of users..and User refers to current variable
const UserModel = mongoose.model("users",User)  
const TodoModel = mongoose.model("todos" , Todo)

module.exports = {
    UserModel:UserModel,
    TodoModel:TodoModel
}