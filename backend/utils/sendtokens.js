// utils/sendToken.js
import jwt from "jsonwebtoken";

export const sendToken = (user, res, message) => {
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
    });

    res.status(200).json({
        success: true,
        message,
        token,
        user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            avatar: user.avatar,
        },
    });
};
