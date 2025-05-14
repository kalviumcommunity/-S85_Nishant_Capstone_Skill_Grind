import express from 'express';
import {
    registerUser,
    loginUser,
    logoutUser,
    updateUserById,
    updateUserPassword,
    getUserInfo
} from '../controllers/User_controller.js';
import { isAuthenticatedUser } from '../middleware/auth.js';

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.get('/logout', logoutUser);

userRouter.get('/user/me', isAuthenticatedUser, getUserInfo); 
userRouter.put('/user/update/:id', isAuthenticatedUser, updateUserById);
userRouter.put('/user/updatepassword/:id', isAuthenticatedUser, updateUserPassword);

export default userRouter;
