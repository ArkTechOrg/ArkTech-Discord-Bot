import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const MONGO_URI: string = process.env.MONGO_URI || "";
    if (!MONGO_URI || MONGO_URI === "") {
      throw new Error("Mongo URI is missing");
    };
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB Connected with Connection ID:", mongoose.connection.id);
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1);
  };
};

export default connectDB;