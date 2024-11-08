import dotenv from "dotenv";
dotenv.config();

import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("hello world!");
});

try {
  const port = process.env.PORT || 5000;
  app.listen(port);
  console.log(`listening on port: ${port}`);
} catch (err: unknown) {
  console.log(err);
}
