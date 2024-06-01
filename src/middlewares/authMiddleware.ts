import { NextFunction, Request, Response } from "express";
import { handleError } from "../utils/responseHandler";
import { verifyToken } from "../utils/jwt";

export const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    const token = req.header('Authorization')?.replace('Bearer ', '')
    if (!token) {
        handleError(res, "Access denied", 401)
    }

    const decoded = verifyToken(token as string)
    if (!decoded) {
        handleError(res, "Invalid token", 401)
    }

    req.user = decoded
    next()
}