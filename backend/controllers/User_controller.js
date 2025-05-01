import User from "../models/User.js"
import ErrorHandler from "./ErrorHandles.js";
import { CatchAsyncError } from "../middleware/catchAsyncErrors.js";
export const registerUser = CatchAsyncError(async (req, res, next) => {
    try {
        const { name, email, password, avatar } = req.body;

        // Check if user already exists
        const isEmailExist = await User.findOne({ email }); // Changed userModel to User
        if (isEmailExist) {
            return next(new ErrorHandler("Email already exists", 400));
        }

        // Create user
        const newUser = await User.create({ // Changed userModel to User
            name,
            email,
            password,
            avatar,
        });

        // Send success response
        res.status(201).json({
            success: true,
            message: "User registered successfully",
            user: {
                _id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                isVerified: newUser.isVerified,
                role: newUser.role,
                avatar: newUser.avatar,
            },
        });
    } catch (error) {
        return next(new ErrorHandler(error.message, 400));
    }
});

// Login User Controller
export const loginUser = CatchAsyncError(async (req, res, next) => {
    try {
        const { email, password } = req.body;

        // Check if email and password are provided
        if (!email || !password) {
            return next(new ErrorHandler("Please enter email and password", 400));
        }

        // Check if user exists
        const user = await User.findOne({ email }).select("+password"); // Changed userModel to User
        if (!user) {
            return next(new ErrorHandler("Invalid email or password", 401));
        }

        // Check if password is correct
        const isPasswordMatched = await user.comparePassword(password);
        if (!isPasswordMatched) {
            return next(new ErrorHandler("Invalid email or password", 401));
        }

        // Send success response
        res.status(200).json({
            success: true,
            message: "User logged in successfully",
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
