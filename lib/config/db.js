import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    return conn.connection.host;
  } catch (error) {
    process.exit(1);
  }
};
