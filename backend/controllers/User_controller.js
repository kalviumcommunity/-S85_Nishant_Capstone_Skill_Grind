import User from "../models/User.js"
import ErrorHandler from "../middleware/ErrorHandles.js";
import { CatchAsyncError } from "../middleware/catchAsyncErrors.js";
import { updateUserByIdService, updateUserPasswordService } from "../services/update.services.js";
import { sendToken } from "../utils/sendtokens.js";
import jwt from "jsonwebtoken"; 

// Register User Controller
export const registerUser = CatchAsyncError(async (req, res, next) => {
    const { name, email, password, avatar } = req.body;

    // ✅ Check if email already exists
    const isEmailExist = await User.findOne({ email });
    if (isEmailExist) {
        return next(new ErrorHandler("Email already exists", 400));
    }

    // ✅ Validate avatar object
    if (!avatar || !avatar.public_id || !avatar.url) {
        return res.status(400).json({ message: "Avatar is required." });
    }

    // ✅ Create new user
    const newUser = await User.create({
        name,
        email,
        password,
        avatar,
    });

    // ✅ Generate JWT Token using method defined in schema
    const token = newUser.generateToken();

    // ✅ Send response with token and user info
    res.status(201).json({
        success: true,
        message: "User registered successfully",
        token,
        user: {
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            isVerified: newUser.isVerified,
            role: newUser.role,
            avatar: newUser.avatar,
        },
    });
});

export const loginUser = CatchAsyncError(async (req, res, next) => {
    try {
        const { email, password } = req.body;

        // Check if email and password are provided
        if (!email || !password) {
            return next(new ErrorHandler("Please enter email and password", 400));
        }

        // Check if user exists
        const user = await User.findOne({ email }).select("+password");
        if (!user) {
            return next(new ErrorHandler("Invalid email or password", 401));
        }

        // Check if password is correct
        const isPasswordMatched = await user.comparePassword(password);
        if (!isPasswordMatched) {
            return next(new ErrorHandler("Invalid email or password", 401));
        }

        // Generate JWT token
        const token = sendToken(user);

        // Send success response with token
        res.status(200).json({
            success: true,
            message: "User logged in successfully",
            token, // Send the token in the response
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                isVerified: user.isVerified,
                role: user.role,
                avatar: user.avatar,
            },
        });
    } catch (error) {
        return next(new ErrorHandler(error.message, 400));
    }
});

// Logout User Controller
export const logoutUser = CatchAsyncError(async (req, res, next) => {
    res.status(200).json({
        success: true,
        message: "Logged out successfully",
    });
});


// get user info
export const getUserInfo = CatchAsyncError(async (req, res, next) => {
    try {
        const userId = req.user._id; // Assuming req.user is set by authentication middleware

        // Find user by ID
        const user = await User.findById(userId); // Changed userModel to User
        if (!user) {
            return next(new ErrorHandler("User not found", 404));
        }

        // Send success response
        res.status(200).json({
            success: true,
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                isVerified: user.isVerified,
                role: user.role,
                avatar: user.avatar,
            },
        });
    } catch (error) {
        return next(new ErrorHandler(error.message, 400));
    }
}); 


//update user info
export const updateUserById = CatchAsyncError(async (req, res, next) => {
    const userId = req.params.id;
    const user = await updateUserByIdService(userId, req.body);

    res.status(200).json({
        success: true,
        message: "User updated successfully",
        user,
    });
});


//update user password
export const updateUserPassword = CatchAsyncError(async (req, res, next) => {
    const { oldPassword, newPassword } = req.body;
    const { id } = req.params;

    const user = await updateUserPasswordService(id, oldPassword, newPassword);

    res.status(200).json({
        success: true,
        message: "Password updated successfully",
        user,
    });
});