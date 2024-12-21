import { Callbacks } from "../models/callbackModel.js";

export const createCallback = async (req, res) => {
    try {
        const callback = await Callbacks.create(req.body);
        res.status(200).json({ success: true, message: callback });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "internal server error",
        });
    }
};

// Fetch all callbacks of specific user
export const getCallbacks = async (req, res) => {
    try {
        const { id } = req.params;
        const callback = await Callbacks.find({ user_id: id });
        if (!callback || callback.length === 0) {
            return res.status(404).json({
                success: false,
                message: "callback request not found",
            });
        }
        res.status(200).json({ success: true, message: callback });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "internal server error",
        });
    }
};

// Fetch all callbacks from all users, this option is for admin
export const getAllCallbacks = async (req, res) => {
    try {
        const callbacks = await Callbacks.find();
        res.status(200).json({ success: true, message: callbacks });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "internal server error",
        });
    }
};

// Update specific callback
export const updateCallback = async (req, res) => {
    try {
        const { id } = req.params;
        const callback = await Callbacks.findByIdAndUpdate(id, req.body, {
            new: true,
        });

        if (!callback) {
            return res.status(404).json({
                success: false,
                message: "callback request not found",
            });
        }
        res.status(200).json({ success: true, message: callback });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: "internal server error",
        });
    }
};

// Delete specific callback
export const deleteCallback = async (req, res) => {
    try {
        const { id } = req.params;
        const callback = await Callbacks.findByIdAndDelete(id);

        if (!callback) {
            return res.status(404).json({
                success: false,
                message: "callback request not found",
            });
        }
        res.status(200).json({ success: true, message: callback });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: "internal server error",
        });
    }
};
