import mongoose from "mongoose";
import chalk from "chalk";
import { configDotenv } from "dotenv";

configDotenv();

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB_URI || " ");
        console.log(chalk.bgCyan.white(`MongoDB connected: ${conn.connection.host}`));
    } catch (error) {
        console.log(chalk.bgRed.white(`MongoDB connection error: ${error.message}`));
        process.exit(1);
    }
};

export default connectDB;
