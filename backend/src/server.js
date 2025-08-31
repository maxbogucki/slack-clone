import express from "express";
import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(5001, () => {
  console.log(`Server started on port ${ENV.PORT}`);
  connectDB();
});
