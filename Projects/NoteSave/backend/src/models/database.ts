import mongoose, { Schema, model, Types } from "mongoose";
import { types } from "util";

const UserSchema = new Schema({
  username: { type: String, unique: true },
  password: { type: String, unique: true },
});

const contentTypes = ["images", "video", "article", "audio"];
const ContentSchema = new Schema({
  title: { type: String },
  link: { type: String, required: true },
  tags: [{ type: mongoose.Types.ObjectId, ref: "Tag" }],
  userId: { type: mongoose.Types.ObjectId, ref: "UserSchema", required: true },
  authorId: { type: mongoose.Types.ObjectId, ref: "UserSchema" },
});

const LinkSchema = new Schema({
  hash:String,
  userId: { type: mongoose.Types.ObjectId, ref: "UserSchema", required: true , unique:true },
});

export const UserModel = model("UserSchema", UserSchema);
export const ContentModel = model("Content", ContentSchema);
export const LinkModel = model("Links" , LinkSchema)
