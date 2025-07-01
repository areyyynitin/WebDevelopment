import { Mode } from "fs";
import mongoose,{Schema,Document,Model} from "mongoose";

type DatabaseType = Document & {
    title:string ,
    content: string
}

const databaseSchema : Schema<DatabaseType> = new Schema({
    title:String,
    content:String
})

const databseModel:Model<DatabaseType> = mongoose.model<DatabaseType>('DatabaseModel',databaseSchema)

export default databseModel;
