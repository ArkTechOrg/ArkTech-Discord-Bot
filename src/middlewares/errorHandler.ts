import { Request, Response } from "express";

/**
 * Middleware to handle errors in the application.
 */
const errorHandler = (err: Error, req: Request, res: Response) => {
  console.error(err);
  res.status(500).json({
    message: "Internal Server Error",
  });
};

export default errorHandler;
