import express from "express";
import { ENV } from "./config/env.js";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

console.log("mongo uri:", ENV.MONGO_URI);

app.listen(5001, () => {
  console.log(`Server started on port ${ENV.PORT}`);
});
