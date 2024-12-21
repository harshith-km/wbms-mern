import mongoose from "mongoose";

const walletSchema = new mongoose.Schema(
    {
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        transactionDate: {
            type: Date,
            required: true,
            default: Date.now,
        },
        credit: {
            type: Number,
            default: 0,
        },
        debit: {
            type: Number,
            default: 0,
        },
        balance: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export const Wallet = mongoose.model("Wallet", walletSchema);
