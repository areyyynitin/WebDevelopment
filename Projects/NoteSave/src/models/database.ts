import mongoose,{Schema,Document,Model} from "mongoose";

type UserSchemaType = Document & {
    username:string ,
    password: string
}

const UserSchema : Schema<UserSchemaType> = new Schema({
    username:{type:String , unique:true},
    password:{type:String , unique:true}
})

const UserModel:Model<UserSchemaType> = mongoose.model<UserSchemaType>('UserSchema',UserSchema)

export default UserModel
