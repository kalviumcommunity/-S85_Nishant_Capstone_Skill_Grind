import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import { ErrorMiddleware } from "./middleware/error.js";
import userRouter from "./routes/user_routes.js"; // import your user routes

dotenv.config();

const app = express(); // change from export const app to const app

// Body parser
app.use(express.json({ limit: "50mb" }));

// CORS setup
app.use(cors({
    origin: ["http://localhost:3000"],
}));

// Routes
app.use("/", userRouter);

// Test route
app.get("/test", (req, res) => {
    res.status(200).json({
        success: true,
        message: "API is working fine"
    });
});

// Error middleware
app.use(ErrorMiddleware);

export default app; // ✅ export as default
