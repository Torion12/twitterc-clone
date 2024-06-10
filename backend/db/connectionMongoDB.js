import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectionMongoDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DATABASE);
    console.log(`MongoDB connected: ${conn.connection.host} `);
  } catch (error) {
    console.error(`Error Connection to mongoDB: ${error.message}`);
    process.exit(1);
  }
};

export default connectionMongoDB;
