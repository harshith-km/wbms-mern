import express from "express";
import {
    createWalletStmt,
    getWalletStmts,
    updateWalletStmt,
} from "../controllers/walletsController.js";

const router = express.Router();

router.get("/", getWalletStmts);
router.post("/", createWalletStmt);
router.put("/:id", updateWalletStmt);

export default router;
