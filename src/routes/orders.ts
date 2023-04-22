import { Router } from "express";
import { getOrders } from "../controllers/order";
import { checkJWToken } from "../middlewares/session";

const router = Router();

router.get("/", checkJWToken, getOrders);

export { router };
