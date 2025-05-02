import { CatchAsyncError } from "../middleware/catchAsyncErrors.js";
import ErrorHandler from "../middleware/ErrorHandles.js";
import User from "../models/User.js"; 

export const getUserById = CatchAsyncError(async (req, res, next) => {
    const userId = req.params.id;

    // Check if userId is provided
    if (!userId) {
        return next(new ErrorHandler("User ID is required", 400));
    }

    // Find user by ID
    const user = await User.findById(userId);
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
});
