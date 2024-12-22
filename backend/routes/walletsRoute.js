import express from "express";
import {
    createWalletStmt,
    getWalletStmts,
    updateWalletStmt,
    getLatestStmt,
} from "../controllers/walletsController.js";

const router = express.Router();

router.get("/:id", getWalletStmts);
router.get("/latest/:id", getLatestStmt);
router.post("/", createWalletStmt);
router.put("/:id", updateWalletStmt);

export default router;
