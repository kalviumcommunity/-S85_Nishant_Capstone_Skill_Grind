import {NextFunction, Request, Response} from "express";
import ErrorHandler from "../controllers/ErrorHandles.js";
export const ErrorMiddleware = (err, req, res, next) => {
err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";
 
    // wrong mongodb id error
    if (err.name === "CastError") {
        const message = `Resource not found. Invalid: ${err.path}`;
        err = new ErrorHandler(message, 400);
    }
    // duplicate key error
    if (err.code === 11000) {
        const message = `Duplicate ${Object.keys(err.keyValue)} entered`;
        err = new ErrorHandler(message, 400);
    }

    res.status(err.statusCode).json({
        success: false,
        message: err.message,
    });
}
