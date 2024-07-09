import Product from "../models/product.model.mjs";
export async function getDocs(req, res) {
  try {
    const data = await Product.find().limit(10);
    return res.json(data);
  } catch (error) {
    res.status(400);
  }
}
export async function getDoc(req, res) {
  const id = req.params["id"];
  try {
    if (!id) return res.status(404);

    const data = await Product.findById(id);
    if (!data) return res.status(404);
    return res.json(data);
  } catch (error) {
    return res.status(400);
  }
}
