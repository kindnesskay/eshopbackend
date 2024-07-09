import mongoose from "mongoose";
export const connectToDb = () =>
  mongoose.connect("mongodb://localhost:27017/eshop").then((res) => {
    console.log("connected");
  });
