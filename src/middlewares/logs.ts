import { NextFunction, Request, Response } from "express";

const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { headers } = req;
  const agent = headers["user-agent"];
  console.log("Agent", agent);
  next();
};

export { logMiddleware };
