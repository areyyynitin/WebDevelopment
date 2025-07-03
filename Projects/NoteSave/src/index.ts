import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import jwt from "jsonwebtoken"
import UserModel from "./models/database";
const JWT_PASSWORD = "qwerty"
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

app.post("/api/v1/content", (req: Response, res: Request) => {});

app.get("/api/v1/content", async (req: Request, res: Response) => {
  try {
    const notes = await UserModel.find({});
    res.status(200).json({ notes });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: error,
    });
  }
});

app.delete("/api/v1/content", (req: Request, res: Response) => {});

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
