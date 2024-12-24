import express from "express";
import {
    createBill,
    getBill,
    getBills,
    getPaidBills,
    getUnpaidBills,
    getUsage,
    updateBill,
} from "../controllers/billsController.js";

const router = express.Router();

router.get("/", getBills);
router.get("/:id", getBill);
router.post("/", createBill);
router.put("/:id", updateBill);
// router.delete("/", deletBill);
router.get("/unpaidbills/:id", getUnpaidBills);
router.get("/paidbills/:id", getPaidBills);

router.get("/usage/:id", getUsage);

export default router;
