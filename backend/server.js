import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import connectionMongoDB from "./db/connectionMongoDB.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is Running on PORT: ${PORT}`);
  connectionMongoDB();
});
