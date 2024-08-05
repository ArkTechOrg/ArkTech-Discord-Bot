import { Request, Response, NextFunction } from "express";

/**
 * Middleware to handle errors in the application.
 */
const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).json({
    message: "Internal Server Error",
  });
};

export default errorHandler;
