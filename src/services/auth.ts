import { encrypt, verify } from "../common/encrypt.handler";
import { generateToken } from "../common/jwt.handler";
import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user";

const registerUser = async (user: User) => {
  const checkExist = await UserModel.findOne({ email: user.email });
  if (checkExist) return "USER_ALREADY_EXIST";

  const passHash = await encrypt(user.password);
  user.password = passHash;
  const newUser = await UserModel.create(user);
  return newUser;
};

const loginUser = async (auth: Auth) => {
  const user = await UserModel.findOne({ email: auth.email });
  if (!user) return "USER_NOT_FOUND";

  const isPasswordValid = await verify(auth.password, user.password);
  if (!isPasswordValid) return "PASSWORD_INCORRECT";

  const token = generateToken(user.email);
  const data = {
    token,
    user,
  };
  return data;
};

export { registerUser, loginUser };
