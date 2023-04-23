import { Router } from "express";
import { uploadFile } from "../controllers/storage";
import multerMiddleware from "../middlewares/file";
import { checkJWToken } from "../middlewares/session";

const router = Router();

router.post(
  "/upload-file",
  checkJWToken,
  multerMiddleware.single("file-upload"),
  uploadFile
);

export { router };
