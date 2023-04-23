import { Response } from "express";
import { handleHttp } from "../common/error.handler";
import { RequestExtended } from "../interfaces/requestExtended";
import { Storage } from "../interfaces/storage.interface";
import { registerStorage } from "../services/storage";

const uploadFile = async (req: RequestExtended, res: Response) => {
  try {
    const { user, file } = req;
    const storageToSave: Storage = {
      fileName: `${file?.filename}`,
      userId: `${user?.id}`,
      path: `${file?.path}`,
    };
    const response = await registerStorage(storageToSave);
    res.send(response);
  } catch (error) {
    handleHttp(res, "ERROR_UPLOAD_FILE");
  }
};

export { uploadFile };
