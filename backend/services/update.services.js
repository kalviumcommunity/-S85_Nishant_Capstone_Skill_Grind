import User from "../models/User.js";
import ErrorHandler from "../middleware/ErrorHandles.js";
import mongoose from "mongoose";
export const updateUserByIdService = async (id, data) => {
    const { name, email, avatar } = data;

   
    const user = await User.findById(id);
    if (!user) {
        throw new ErrorHandler("User not found", 404);
    }

   
    if (email && email !== user.email) {
        const existing = await User.findOne({ email });
        if (existing) {
            throw new ErrorHandler("Email already in use", 400);
        }
        user.email = email;
    }

   
    if (name) {
        user.name = name;
    }

   
    if (avatar) {
      
        if (avatar.public_id && avatar.url) {
            user.avatar = avatar;
        } else {
            throw new ErrorHandler("Invalid avatar data", 400);
        }
    }

    await user.save();
    return user;
};



// Update password service
export const updateUserPasswordService = async (id, oldPassword, newPassword) => {
    if (!oldPassword || !newPassword) {
      throw new ErrorHandler("Both old and new passwords are required", 400);
    }
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new ErrorHandler("Invalid user ID", 400);
    }
  
    const user = await User.findById(id).select("+password");
    if (!user) {
      throw new ErrorHandler("User not found", 404);
    }
  
    const isMatch = await user.comparePassword(oldPassword);
    if (!isMatch) {
      throw new ErrorHandler("Old password is incorrect", 401);
    }
  
    user.password = newPassword;
    await user.save();
  
    return user;
  };