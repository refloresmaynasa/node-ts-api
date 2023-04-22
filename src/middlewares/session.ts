import { NextFunction, Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import { verifyToken } from "../common/jwt.handler";

interface RequestExtended extends Request {
  user?: string | JwtPayload;
}

const checkJWToken = (
  req: RequestExtended,
  res: Response,
  next: NextFunction
) => {
  try {
    const authorization = req.headers.authorization || "";
    const jwt = authorization.split(" ").pop();
    const userPayload = verifyToken(`${jwt}`);

    if (!userPayload) {
      res.status(401);
      res.send("INVALID_TOKEN");
    } else {
      console.log({ authorization });
      req.user = userPayload;
      next();
    }
  } catch (error) {
    console.log({ error });
    res.status(401);
    res.send("INVALID_SESSION");
  }
};

export { checkJWToken };
