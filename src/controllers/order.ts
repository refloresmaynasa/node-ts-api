import { Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import { handleHttp } from "../common/error.handler";
import { getOrdersData } from "../services/orders";

interface RequestExtended extends Request {
  user?: string | JwtPayload;
}

const getOrders = async (req: RequestExtended, res: Response) => {
  try {
    const response = await getOrdersData();
    res.send({ data: response, user: req.user });
  } catch (error) {
    handleHttp(res, "ERROR_GET_ORDERS", error);
  }
};

export { getOrders };
