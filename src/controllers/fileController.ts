import { validateFileSave } from "./../services/joiValidation";
import { catchAsync } from "./../utils/catchAsync";
import { Response, Request, NextFunction } from "express";
import AppError from "../utils/AppError";
import FirebaseService from "../services/firebase";

export const saveUploadedFile = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { error } = validateFileSave(req.body);

    if (error) {
      return next(new AppError(error.message, 400));
    }

    const firebaseService = new FirebaseService();

    await firebaseService.saveImage(
      req.body.imageId,
      req.user!.uid,
      req.body.tags
    );
    return res.status(201).json({
      message: "file saved successfully",
      data: req.body.imageId,
    });
  }
);

export const shareFiles = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const firebaseService = new FirebaseService();
    const id = req.params.id;

    await firebaseService.shareFiles(id, req.user!.uid);
    return res.status(200).json({
      message: "file shared successfully",
    });
  }
);
