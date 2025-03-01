import jwt from "jsonwebtoken";

const generateToken = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "7d",
    });

    res.cookie("jwt", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
        httpOnly: true, // Prevents XSS attacks
        sameSite: "strict", // Protects against CSRF attacks
        secure: process.env.NODE_ENV === "production", // Ensures HTTPS in production
    });

    return token;
};

export default generateToken;
