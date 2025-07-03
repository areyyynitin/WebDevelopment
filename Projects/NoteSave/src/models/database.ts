import mongoose,{Schema,Model, model, Types} from "mongoose";
import { types } from "util";



const UserSchema = new Schema({
    username:{type:String , unique:true},
    password:{type:String , unique:true}
})

const contentTypes = ['images' , 'video' , 'article' , 'audio']
const ContentSchema = new Schema({
    title:{type:String },
    link:{type:String ,required:true},
    tags:[{type:Types.ObjectId , ref:'Tag'}],
    userId : {type:Types.ObjectId , ref:'User' , required:true }
})

export const UserModel= model('UserSchema',UserSchema)
export const ContentModel = model('Content' , ContentSchema)


