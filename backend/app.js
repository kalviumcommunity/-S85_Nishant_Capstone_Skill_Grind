import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { ErrorMiddleware } from "./middleware/error.js";
import userRouter from "./routes/user_routes.js";
import courseRoutes from "./routes/courseRoutes.js"; 
import levelRoutes from './routes/level.js';
import videoRoutes from './routes/videoRoutes.js';

dotenv.config();

const app = express();

// Body parser
app.use(express.json({ limit: "50mb" }));

// CORS setup
app.use(cors({
    origin: ["http://localhost:3000"], // frontend URL
}));

// Routes
app.use("/api/users", userRouter);    //user routes
app.use("/api/courses", courseRoutes); // course routes
app.use('/api/levels', levelRoutes);// level routes
app.use('/api/videos', videoRoutes);   // video routes

// Test route
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "API is working fine",
    });
});

// Global error handler
app.use(ErrorMiddleware);

export default app;
