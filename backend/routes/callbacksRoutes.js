import express from "express";
import {
    createCallback,
    deleteCallback,
    getAllCallbacks,
    getCallbacks,
    updateCallback,
} from "../controllers/callbackController.js";

const router = express.Router();

router.get("/", getAllCallbacks); //for admin
router.get("/:id", getCallbacks); // for user
router.post("/", createCallback);
router.put("/:id", updateCallback);
router.delete("/", deleteCallback);

export default router;
