import express from 'express';
import { getUserById } from '../services/user.services.js';
import {
    registerUser,
     loginUser, 
     logoutUser, 
     updateUserById, 
     updateUserPassword} from '../controllers/User_controller.js';

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.get('/logout', logoutUser);
userRouter.get("/user/:id", getUserById);
userRouter.put('/user/update/:id', updateUserById);

userRouter.put('/user/updatepassword/:id', updateUserPassword)


export default userRouter;