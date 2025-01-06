import jwt from 'jsonwebtoken';
import userModel from '../models/user.model.js';


const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            return res.status(401).json({ error: "Unauthorized : No Token Provided." })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) {
            return res.status(401).json({ error: "Unauthorized : Token is Invalid." })
        }

        const user = await userModel.findById(decoded.userId).select("-password");

        if (!user) {
            return res.status(401).json({ error: "Unauthorized : User Not Found." })
        }

        req.user=user;

        next();

    } catch (error) {
        console.log("error in middle ware", error.message)
        res.status(500).json({ error: "internal error" })
    }
}

export default protectRoute;
