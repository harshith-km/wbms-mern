import { User } from "../models/userModel.js";

export const createUser = async (req, res) => {
    const userData = req.body;
    if (
        !userData.firstName ||
        !userData.lastName ||
        !userData.address ||
        !userData.email ||
        !userData.password ||
        !userData.confirmPassword
    ) {
        return res
            .status(400)
            .json({ success: false, message: "all fields are required" });
    }

    if (userData.password !== userData.confirmPassword) {
        return res
            .status(400)
            .json({ success: false, message: "Password do not match" });
    }
    try {
        const user = await User.create(userData);
        res.status(200).json({ success: true, user });
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error.",
        });
    }
};

export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        if (!users) {
            return res
                .status(404)
                .json({ success: false, message: "user not found" });
        }
        res.status(200).json({ success: true, message: users });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal server error.",
        });
    }
};

export const getUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id, { password: false });
        if (!user) {
            return res
                .status(404)
                .json({ success: false, message: "user not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error.",
        });
    }
};

export const updateUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByIdAndUpdate(id, req.body);

        if (!user) {
            return res
                .status(404)
                .json({ success: false, message: "user not found" });
        }

        res.status(200).json({ success: true, message: "user data updated" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndUpdate(id);
        if (!user) {
            return res
                .status(404)
                .json({ success: false, message: "user not found" });
        }

        res.status(200).json({
            success: true,
            message: "user deleted successfully",
        });
    } catch (error) {
        res.status(500).json({ success: false, message: "server error" });
    }
};
