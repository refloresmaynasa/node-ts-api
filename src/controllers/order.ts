import { Response } from "express";
import { handleHttp } from "../common/error.handler";
import { RequestExtended } from "../interfaces/requestExtended";
import { getOrdersData } from "../services/orders";

const getOrders = async (req: RequestExtended, res: Response) => {
  try {
    const response = await getOrdersData();
    res.send({ data: response, user: req.user });
  } catch (error) {
    handleHttp(res, "ERROR_GET_ORDERS", error);
  }
};

export { getOrders };
