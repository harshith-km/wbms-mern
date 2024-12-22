import { Bill } from "../models/billModel.js";

// create bill for the user
export const createBill = async (req, res) => {
    try {
        const {user_id , startDate , endDate, waterUsed , costPer100L, paymentStatus = "unpaid"} = req.body
        if (
            !user_id ||
            !startDate ||
            !endDate ||
            !waterUsed ||
            !costPer100L 
        ) {
            return res.status(404).json({ message: "all fields are required" });
        }
        console.log(req.body)
        const amount = (waterUsed / 100) * costPer100L

        const bill = await Bill.create({user_id , startDate , endDate, waterUsed , costPer100L , amount, paymentStatus });
        res.status(201).json({ status: true, message: bill });
    } catch (error) {
        res.status(500).json("internal server error");
    }
};

// fetch all bills , option for admin
export const getBills = async (req, res) => {
    try {
        // const { id } = req.params;
        const bills = await Bill.find();
        if (!bills) {
            return res.status(404).json({ message: "No bills found" });
        }
        res.status(200).json({ status: true, message: bills });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};

export const getBill = async (req, res) => {
    const { id } = req.params; // Corrected: It should be `params` instead of `param`
    try {
        const bill = await Bill.findById(id);
        if (!bill) {
            return res.status(404).json({ message: "No bill found" });
        }
        res.status(200).json({ message: bill });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};

export const updateBill = async (req, res) => {
    const { id } = req.params; 
    try {
        const bill = await Bill.findByIdAndUpdate(id, req.body, { new: true }); // Ensure `{ new: true }` to return updated document
        if (!bill) {
            return res
                .status(404)
                .json({ success: false, message: "No bill found" });
        }
        res.status(200).json({ status: true, message: bill });
    } catch (error) {
        res.status(500).json({ message: "Internal server error"});
    }
};

export const getUnpaidBills = async(req, res) =>{
    try{
        const {id} = req.params
        const unpaidBills = await Bill.find({user_id : id , paymentStatus:"unpaid"}).sort({startDate:1})
        res.status(200).json(unpaidBills)
    }catch(error){
        res.status(500).json({ message: "Internal server error"});
    }
}

export const getPaidBills = async(req, res) =>{
    try{
        const {id} = req.params
        const unpaidBills = await Bill.find({user_id : id , paymentStatus:"paid"}).sort({startDate:-1})
        res.status(200).json(unpaidBills)
    }catch(error){
        res.status(500).json({ message: "Internal server error"});
    }
}


// export const getOverDuebills = async (req, res) =>{
//     try{

//     }
// }