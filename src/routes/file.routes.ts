import { saveUploadedFile, shareFiles } from "./../controllers/fileController";
import { authMiddleware } from "../controllers/auth";
import express from "express";
const router = express.Router();

/* GET home page. */
router.post("/saveImage", authMiddleware, saveUploadedFile);
router.put("/share/:id", authMiddleware, shareFiles);

export default router;
