import { Car } from "../interfaces/car.interface";
import ProductModel from "../models/product";

const insertCar = async (product: Car) => {
  const responseInsert = await ProductModel.create(product);
  return responseInsert;
};

const getCars = async () => {
  const responseProducts = await ProductModel.find({});
  return responseProducts;
};

const getCar = async (id: string) => {
  const responseProduct = await ProductModel.findOne({ _id: id });
  return responseProduct;
};

const updateCar = async (id: string, data: Car) => {
  const responseUpdate = await ProductModel.findOneAndUpdate(
    { _id: id },
    data,
    {
      new: true,
    }
  );
  return responseUpdate;
};

const deleteCar = async (id: string) => {
  const responseDelete = await ProductModel.findOneAndRemove({ _id: id });
  return responseDelete;
};

export { insertCar, getCars, getCar, updateCar, deleteCar };
