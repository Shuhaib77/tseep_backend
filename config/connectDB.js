import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
export const DB = () => {
  mongoose
    .connect(process.env.MONGODB_CLIENT)
    .then(() => {
      console.log("database connected");
    })
    .catch((error) => {
      console.log(error);
    });
};
