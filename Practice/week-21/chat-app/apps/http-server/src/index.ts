import express from "express";

const app =express();


app.get("/signup", (req, res) => {
  res.send("Hello, World! what a beuatiful day to code");
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});