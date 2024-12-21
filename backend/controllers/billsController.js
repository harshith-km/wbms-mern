import { Bill } from "../models/billModel.js";

export const createBill = async (req, res) => {
    try {
        const bill = await Bill.create(req.body);
        res.status(200).json({ status: true, message: bill });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

export const getBills = async (req, res) => {
    try {
        const bills = await Bill.find();
        if (!bills) {
            return res
                .status(404)
                .json({ success: false, message: "No bills found" });
        }
        res.status(200).json({ status: true, message: bills });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

export const getBill = async (req, res) => {
    const { id } = req.params; // Corrected: It should be `params` instead of `param`
    try {
        const bill = await Bill.findById(id);
        if (!bill) {
            return res
                .status(404)
                .json({ success: false, message: "No bill found" });
        }
        res.status(200).json({ status: true, message: bill });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

export const updateBill = async (req, res) => {
    const { id } = req.params; // Corrected: It should be `params` instead of `param`
    try {
        const bill = await Bill.findByIdAndUpdate(id, req.body, { new: true }); // Ensure `{ new: true }` to return updated document
        if (!bill) {
            return res
                .status(404)
                .json({ success: false, message: "No bill found" });
        }
        res.status(200).json({ status: true, message: bill });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};
