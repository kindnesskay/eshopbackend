import express from "express";
import { getDocs, getDoc } from "../controllers/product.controller.mjs";
const router = express.Router();
router.get("/", getDocs);
router.get("/:id", getDoc);
export default router;
