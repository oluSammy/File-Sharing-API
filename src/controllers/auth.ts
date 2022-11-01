import { NextFunction } from "express";
import FirebaseService from "../services/firebase";
import { catchAsync } from "../utils/catchAsync";
import AppError from "../utils/AppError";
import { Response, Request } from "express";
import jwt from "jsonwebtoken";
import { appConfig } from "../config/config";

export const generateToken = function (userId: string): string {
  return jwt.sign({ id: userId }, appConfig.JWT_SECRET_KEY, {
    expiresIn: "20d",
  });
};

export const authMiddleware = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      let token: string | undefined;

      if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
      ) {
        token = req.headers.authorization.split(" ")[1];
      }

      if (!token) {
        return next(new AppError("No token provided", 401));
      }

      const firebase = new FirebaseService();
      const user = await firebase.verifyToken(token);

      req.user = user;

      next();
    } catch (e: any) {
      next(new AppError(e.message, 401));
    }
  }
);
