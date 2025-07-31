import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await (
      await mongoose.connect(`process.env.MONGO_URI/${foodyfarm}`)
    ).then(() => {
      console.log("DB Connected!!!");
    });
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1); // Exit process with failure
  }
};
