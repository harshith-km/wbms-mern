import { Wallet } from "../models/walletModel.js";

// creates wallet statement with balance and either credit or debit
export const createWalletStmt = async (req, res) => {
    try {
        const { user_id, credit = 0, debit = 0 } = req.body;

        if (!user_id) {
            return res.status(400).json({
                success: false,
                message: "Missing required field: user_id",
            });
        }

        let balance;
        try {
            balance = await getBalance(user_id);
        } catch (error) {
            console.error("Error fetching balance:", error);
            return res.status(500).json({
                success: false,
                message: "Internal server error",
            });
        }

        const creditInt = parseInt(credit, 10) || 0; 
        const debitInt = parseInt(debit, 10) || 0; 

        if(creditInt > 5000){
            console.log("amount is greater than 5000")
            return res.status(400).json({message:"User cannot add more than 6000Rs to wallet"})
        }
        // Update balance based on credit or debit
        balance += creditInt;
        balance -= debitInt;

        // Create the wallet entry
        const wallet = await Wallet.create({
            user_id,
            debit : debitInt,
            credit : creditInt,
            balance,
        });

        res.status(200).json(wallet);
    } catch (error) {
        console.error("Error creating wallet:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
    console.log("added")
};

export const getLatestStmt = async (req, res) => {
    try {
        const { id } = req.params;
        const balance = await getBalance(id)
        if (!balance) {
            return res.status(404).json({message:"No wallet statement found"});
        }
        res.status(200).json(balance);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "internal server error",
        });
    }
};


// fetch the wallet transactions for specific user
export const getWalletStmts = async (req, res) => {
    try {
        console.log("got request");
        const { id } = req.params;
        const wallet = await Wallet.find({ user_id: id }).sort({transactionDate : -1});
        if (!wallet) {
            return res.status(404).json({
                success: false,
                message: "no wallet statements found",
            });
        }
        res.status(200).json(wallet);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "internal server error",
        });
    }
};

export const updateWalletStmt = async (req, res) => {
    try {
        const { id } = req.params;
        const wallet = await Wallet.findByIdAndUpdate(id, req.body);
        if (!wallet) {
            return res.status(404).json({
                success: false,
                message: "no wallet statements found",
            });
        }
        res.status(200).json({ success: true, message: wallet });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "internal server error",
        });
    }
};

export const getBalance = async (id) => {
    try {
        const stmt = await Wallet.find({ user_id: id })
            .sort({ transactionDate: -1 })
            .limit(1);

        const [{ balance }] = stmt;
        return balance;
    } catch (error) {
        return error;
    }
};
