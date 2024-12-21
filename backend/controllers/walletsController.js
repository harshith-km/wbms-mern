export const createWalletStmt = async (req, res) => {
    try {
        const wallet = await Wallet.create(req.body);
        res.status(200).json({ success: true, message: wallet });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "internal server error",
        });
    }
};

export const getWalletStmts = async (req, res) => {
    try {
        const { id } = req.params;
        const wallet = await Wallet.find({ user_id: id });
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
