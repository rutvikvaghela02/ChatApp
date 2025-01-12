import jwt from 'jsonwebtoken';

const genrateTokenAndSetCookie = (userId, res) => {
    // console.log("Generating token for userId:", userId);
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "15d",
    });
    // console.log("Generated token:", token);

    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: true,
    });
    // console.log("Cookie set successfully.");
};


export default genrateTokenAndSetCookie;