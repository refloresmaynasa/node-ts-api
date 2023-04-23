import { Storage } from "../interfaces/storage.interface";
import StorageModel from "../models/storage";

const registerStorage = async ({ fileName, path, userId }: Storage) => {
  const responseStorage = await StorageModel.create({ fileName, path, userId });
  return responseStorage;
};

export { registerStorage };
