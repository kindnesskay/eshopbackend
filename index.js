import express from "express";
import { connectToDb } from "./utils/connectToMongo.mjs";
import cors from "cors";
import productRouter from "./routes/products.route.mjs";
const app = express();

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:4200",
  })
);
app.use("/products", productRouter);
app.listen(3000, () => {
  console.log("app is runnig ");
  connectToDb();
});
