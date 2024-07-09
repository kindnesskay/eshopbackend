import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
  title: { type: String, required: true },
  price: Number,
  imageUrl: { type: String, default: "" },
  description: String,
});
const Product = mongoose.model("product", productSchema);
export default Product;
