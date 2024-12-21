import express from "express";
import {
    createBill,
    getBill,
    getBills,
    updateBill,
} from "../controllers/billsController.js";

const router = express.Router();

router.get("/", getBills);
router.get("/:id", getBill);
router.post("/", createBill);
router.put("/:id", updateBill);
// router.delete("/", deletBill);

export default router;
