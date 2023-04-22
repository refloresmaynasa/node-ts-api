import { Request, Response } from "express";
import { loginUser, registerUser } from "../services/auth";

const login = async ({ body }: Request, res: Response) => {
  const response = await loginUser(body);

  if (response == "PASSWORD_INCORRECT") {
    res.status(403);
  }

  res.send(response);
};

const register = async ({ body }: Request, res: Response) => {
  const response = await registerUser(body);
  res.send(response);
};

export { login, register };
