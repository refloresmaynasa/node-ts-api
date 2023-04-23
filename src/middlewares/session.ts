import { NextFunction, Response } from "express";
import { verifyToken } from "../common/jwt.handler";
import { RequestExtended } from "../interfaces/requestExtended";

const checkJWToken = (
  req: RequestExtended,
  res: Response,
  next: NextFunction
) => {
  try {
    const authorization = req.headers.authorization || "";
    const jwt = authorization.split(" ").pop();
    const userPayload = verifyToken(`${jwt}`) as { id: string };

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
