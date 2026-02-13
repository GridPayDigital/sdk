import express from "express";
import { createWallet, getWallet } from "../controllers/wallet.controller.js";

const router = express.Router();

router.post("/create", createWallet);
router.get("/:address", getWallet);

export default router;
