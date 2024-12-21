import express from "express";
import {
    createCallback,
    deleteCallback,
    getAllCallbacks,
    getCallbacks,
    updateCallback,
} from "../controllers/callbackController.js";

const router = express.Router();

router.get("/", getAllCallbacks);
router.get("/:id", getCallbacks);
router.post("/", createCallback);
router.put("/:id", updateCallback);
router.delete("/", deleteCallback);

export default router;
