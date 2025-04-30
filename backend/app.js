import express from "express";
export const app = express();
import cors from "cors";
import dotenv from 'dotenv';
dotenv.config();

//body parser
app.use(express.json({limit:"50mb"}));

//cors =>cross origin resourse sharing
app.use(cors({
    origin: ["http://localhost:3000"],
}))


//Testing a api 
app.get("/test", (req, res) => {
    res.status(200).json({
        success: true,
        message: "API is working fine"
    })
})



