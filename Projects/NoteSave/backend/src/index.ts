import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import jwt from "jsonwebtoken"
import { ContentModel, UserModel } from "./models/database";
import { JWT_PASSWORD } from "./config";
import { UserMiddleware } from "./middleware";
dotenv.config();

const app: Express = express();
app.use(express.json());
const port = process.env.PORT;

if (!process.env.MONGO_URI) {
  throw new Error("MONGO_URI environment variable is not defined");
}

app.post("/api/v1/signup", async (req: Request, res: Response) => {
  const { username, password } = req.body;
  try {
    const note = new UserModel({
      username,
      password,
    });
    await note.save();
    res.status(200).json({ username, password });
  } catch (error) {
    console.log(error);
    res.status(411).json({ message: error });
  }
});

app.post("/api/v1/signin", async (req: Request, res: Response) => {
  const {username,password} = req.body;
  const existingUser = await UserModel.findOne({username,password})
  if(existingUser){
    const token = jwt.sign({
      id:existingUser._id
    },JWT_PASSWORD)

    res.status(200).json({message:token})
  } else{
    res.status(403).json({message:"User not exist! Signup First"})
  }

});

app.post("/api/v1/content", UserMiddleware ,async (req: Request, res: Response) => {
  const link = req.body.link;
  const type = req.body.type;
  await  ContentModel.create({
    link,type,
  // @ts-ignore
  userId : req.userId,
  tags:[]
  })
  
  res.status(200).json({message:"Content added"});
});

app.get("/api/v1/content",UserMiddleware, async (req: Request, res: Response) => {
  try {
    // @ts-ignore
    const userId = req.userId
    const content = await ContentModel.find({
      userId:userId
    }).populate("userId" , "username");
    res.status(200).json({ content });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: error,
    });
  }
});

app.delete("/api/v1/content",UserMiddleware , async (req: Request, res: Response) => {
  try {
    const contentId = req.body.contentId;
  await ContentModel.deleteMany({
    contentId,
    // @ts-ignore
    userId:req.userId
  })

  res.status(200).json("message:Content Deleted")
  } catch (error) {
    res.status(404).json({Error:error})
  }
  
});

app.post("/api/v1/brain/share", (req: Request, res: Response) => {});

app.get("/api/v1/brain/:sharelink", (req: Request, res: Response) => {});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to DB"))
  .catch((error) => console.log(error))
  .then(() => {
    app.listen(port, () => {
      console.log(`Connected to localhost:${port}`);
    });
  });
