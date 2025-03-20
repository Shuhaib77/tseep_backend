import mongoose from "mongoose";

export const DB=()=>{
    mongoose
  .connect(
    "mongodb+srv://shuhaibbasheer20022:lL5lLuVCb8PIjgD7@cluster0.e4jd9.mongodb.net/"
  )
  .then(() => {
    console.log("database connected");
  })
  .catch((error) => {
    console.log(error);
  });

}


