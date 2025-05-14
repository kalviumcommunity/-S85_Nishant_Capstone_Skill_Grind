import jwt from "jsonwebtoken";
import User from "../models/User.js";
import ErrorHandler from "./ErrorHandles.js";
import { CatchAsyncError } from "./catchAsyncErrors.js";

export const isAuthenticatedUser = CatchAsyncError(async (req, res, next) => {
    const { token } = req.headers;

    if (!token) {
        return next(new ErrorHandler("Please login to access this resource", 401));
    }

    try {
        const decodedData = jwt.verify(token, process.env.JWT_SECRET);

        req.user = await User.findById(decodedData.id);
        if (!req.user) {
            return next(new ErrorHandler("User not found", 404));
        }

        next();
    } catch (error) {
        return next(new ErrorHandler("Invalid or expired token", 401));
    }
});
