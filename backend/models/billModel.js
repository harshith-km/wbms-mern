import mongoose from "mongoose";

const billSchema = new mongoose.Schema(
    {
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        startDate: {
            type: Date,
            required: true,
        },
        endDate: {
            type: Date,
            required: true,
        },
        waterUsed: {
            type: Number,
            required: true,
        },
        costPer100L: {
            type: Number,
            required: true,
        },
        amount: {
            type: Number,
            // required: true,
            default: 0
        },
        paymentStatus: {
            type: String,
            enum: ["unpaid", "paid", "overdue"],
            default: "unpaid",
        },
        paymentDate :{
            type :Date , 
            default : undefined,
            required : false
        },
        paymentMode : {
            type : String,
            enum : ["wallet" , "UPI" , "Netbanking" ], 
            required : false
        }
    },
    {
        timestamps: true,
    }
);

export const Bill = mongoose.model("Bill", billSchema);
