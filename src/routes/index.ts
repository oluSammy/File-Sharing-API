import { authMiddleware } from "../controllers/auth";
import express from "express";
const router = express.Router();

/* GET home page. */
router.post("/signup", authMiddleware);

export default router;
