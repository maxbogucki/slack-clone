import express from "express";
import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";
import { clerkMiddleware } from "@clerk/express";
import { inngest, functions } from "./src/inngest";
import { serve } from "inngest/express";

const app = express();

app.use(express.json()); // Middleware to parse JSON request bodies
app.use(clerkMiddleware()); // req.auth will be available in the request object

app.use("/api/inngest", serve({ client: inngest, functions }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const startServer = async () => {
  try {
    await connectDB();
    if (ENV.NODE_ENV !== "production") {
      app.listen(5001, () => {
        console.log(`Server started on port ${ENV.PORT}`);
        connectDB();
      });
    }
  } catch (error) {
    console.error("Error starting server:", error);
    process.exit(1);
  }
};

startServer();

export default app;