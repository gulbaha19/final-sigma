import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import ProductRoute from "./routes/newProduct.js";
const app = express();
dotenv.config();

// Constants
const PORT = process.env.PORT || 3001;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api", ProductRoute);
// Routes
// http://localhost:3002

async function start() {
  try {
    await mongoose.connect(
      `mongodb+srv://gulbaha:291292Gu@db.wup4oqa.mongodb.net/products?retryWrites=true&w=majority`,
    );

    app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
  } catch (error) {
    console.log(error);
  }
}
start();
