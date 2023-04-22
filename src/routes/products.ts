import { Router } from "express";
import {
  deleteProduct,
  getProduct,
  getProducts,
  postProduct,
  updateProduct,
} from "../controllers/product";
import { logMiddleware } from "../middlewares/logs";

const router = Router();

router.get("/", getProducts);
router.get("/:id", logMiddleware, getProduct);
router.post("/", postProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export { router };
