import express from "express";
import { Client } from "pg";

const app = express();
app.use(express.json());

const pgClient = new Client({
  user: "neondb_owner",
  password: "npg_xth3qTsJjZ2g",
  port: 5432,
  host: "ep-snowy-heart-a1r020zd-pooler.ap-southeast-1.aws.neon.tech",
  database: "neondb",
  ssl: true,
});

app.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const insertQuery = `insert into users(username,email,password) values($1,$2,$3);`

    const response = await pgClient.query(insertQuery , [username,email,password]);

    res.json({ message: `${username}, ${email}..you have signup up` });
  } catch (error) {
    res.json({message:"error while signing up" , error})
  }
});

app.listen(5000, async () => {
  await pgClient.connect();
  console.log("DB CONNECTED");
});
