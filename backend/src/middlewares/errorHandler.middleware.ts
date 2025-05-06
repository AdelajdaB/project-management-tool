import { ErrorRequestHandler } from "express";
import { HTTPSTATUS } from "../config/http.config";
import { AppError } from "../utils/appError";

export const errorHandler:ErrorRequestHandler = (error, re, res, next): any => {
    console.log(`Error Occurred on Path ${re.path}`, error)

    if (error instanceof SyntaxError) {
        return res.status(HTTPSTATUS.BAD_REQUEST).json({
        message: "Invalid JSON format. Please check your request body."
    })}

    if (error instanceof AppError) {
        return res.status(error.statusCode).json({
            message: error.message,
            errorCode: error.errorCode
        })
    }

    return res.status(HTTPSTATUS.INTERNAL_SERVER_ERRROR).json({
        message: "Internal Server Error",
        error: error?.message || "Unknown error occurred",
    })
}