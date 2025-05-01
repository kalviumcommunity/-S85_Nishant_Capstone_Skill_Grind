import express from 'express';
import { registerUser, loginUser, logoutUser } from '../controllers/User_controller.js';
import { get } from 'http';
import { getUserById } from '../services/user.services.js';

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.get('/logout', logoutUser);
userRouter.get("/user/:id", getUserById);





export default userRouter;