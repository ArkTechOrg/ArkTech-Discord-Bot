import { Request, Response, NextFunction } from "express";

interface JSONParseError extends SyntaxError {
  status?: number;
  body?: boolean;
};

/**
 * Middleware to check for JSON parsing errors in the request body.
 */
const checkJSON = (err: JSONParseError, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    console.error(err);
    res.status(400).json({ message: "Invalid JSON" });
    return;
  };
  next();
};

export default checkJSON;
