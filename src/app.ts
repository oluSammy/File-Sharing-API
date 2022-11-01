import createError, { HttpError } from "http-errors";
import express, { Request, Response, NextFunction } from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";

import fileRouter from "./routes/file.routes";
import AppError from "./utils/AppError";
import globalErrorHandler from "./controllers/errorController";

var app = express();
app.use(cors());

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));

app.use("/", (req, res) => {
  return res.send("API is live and running 🚀");
});

app.use("/files", fileRouter);

// catch 404 and forward to error handler
// handles all request url that do not exits on the server
app.all("*", (req: Request, res: Response, next: NextFunction) => {
  next(new AppError(`can't find ${req.url} on this server`, 404));
});

// handles all global error
app.use(globalErrorHandler);

export default app;
