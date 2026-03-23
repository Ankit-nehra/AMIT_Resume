import express from "express";
import mongoose from "mongoose";
import profileRoutes from "./routes/profile.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/resumeDB")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use("/api/profile", profileRoutes);

export default app;