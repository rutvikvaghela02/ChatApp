import userModel from "../models/user.model.js";

export const getUserForSidebar = async (req,res) =>{
    try {
        const LogInUserId = req.user._id;

        const alluser = await userModel.find({_id: {$ne : LogInUserId}}).select("-password");

        res.status(200).json(alluser)

    } catch (error) {
        res.send("getUserForSidebar controller",error.message)
        return res.status(400).json({ error: "internal server error." });
    }
}