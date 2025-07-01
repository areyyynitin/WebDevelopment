import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import databseModel from "./models/database";
dotenv.config();

const app: Express = express();
app.use(express.json());
const port = process.env.PORT;

if (!process.env.MONGO_URI) {
  throw new Error("MONGO_URI environment variable is not defined");
}
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to DB"))
  .catch((error) => console.log(error));

app.get("/", async (req: Request, res: Response) => {
  try {
    const notes = await databseModel.find({});
    res.status(200).json({ notes });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: error,
    });
  }
});

app.post("/signin", async (req: Request, res: Response) => {
  try {
    const { title, content } = req.body;
    const note = new databseModel({
      title,
      content,
    });

    await note.save();
    res.status(200).json({
      message: "Done",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: error,
    });
  }
});

app.get("/hello", (req: Request, res: Response) => {
    res.send("Hello world")
});

app.get("/helloo", (req: Request, res: Response) => {
    res.send("Hello world")
});

app.listen(port, () => {
  console.log(`Connected to localhost:${port}`);
});
