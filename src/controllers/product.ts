import { Request, Response } from "express";
import { handleHttp } from "../common/error.handler";
import {
  deleteCar,
  getCar,
  getCars,
  insertCar,
  updateCar,
} from "../services/products";

const getProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await getCar(id);
    res.send(response);
  } catch (error) {
    handleHttp(res, "ERROR_GET_PRODUCT", error);
  }
};

const getProducts = async (req: Request, res: Response) => {
  try {
    const response = await getCars();
    res.send(response);
  } catch (error) {
    handleHttp(res, "ERROR_GET_PRODUCTS", error);
  }
};

const updateProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const response = await updateCar(id, body);
    res.send(response);
  } catch (error) {
    handleHttp(res, "ERROR_UPDATE_PRODUCT", error);
  }
};

const postProduct = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const response = await insertCar(body);
    res.send(response);
  } catch (error) {
    handleHttp(res, "ERROR_POST_PRODUCT", error);
  }
};

const deleteProduct = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await deleteCar(id);
    res.send(response);
  } catch (error) {
    handleHttp(res, "ERROR_DELETE_PRODUCT", error);
  }
};

export { getProduct, getProducts, updateProduct, postProduct, deleteProduct };
