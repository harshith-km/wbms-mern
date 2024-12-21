import mongoose from "mongoose";

const callbackschema = new mongoose.Schema(
    {
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        userName: {
            type: String,
            required: true,
        },
        phoneNO: {
            type: String, // Changed to String to accommodate different formats
            required: true,
            match: [/^\d{10}$/, "Please enter a valid 10-digit phone number"], // Example regex for validation
        },
        address: {
            type: String,
            required: true,
        },
        problem: {
            type: String,
            enum: [
                "water issue",
                "water leakage",
                "billing issue",
                "payment issue",
                "pipe problem",
                "other issue",
            ],
            default: "water issue",
        },
        problemDescription: {
            type: String,
            required: false,
        },
        state: {
            type: String,
            enum: ["pending", "processing", "resolved"],
            default: "pending",
        },
    },
    {
        timestamps: true,
    }
);

export const Callbacks = mongoose.model("Callback", callbackschema);
