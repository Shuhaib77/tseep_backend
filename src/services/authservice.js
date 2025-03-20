import User from "../modals/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const secretKey = process.env.SECRET_KEY;

//register
export const registerService = async (
  name,
  email,
  phone,
  status,
  password,
  countryCode
) => {
  if (!name || !email || !phone || !status || !password || !countryCode) {
    req.res.status(404).json("all fields are requird");
  }
  const hashPass = await bcrypt.hash(password, 10);
  const checkUser = await User.findOne({ email: email });
  if (checkUser) {
    throw new Error("user already exists");
  }
  const newUser = new User({
    name,
    email,
    password: hashPass,
    status,
    phone,
    countryCode,
  });
  await newUser.save();
  return newUser;
};

//login
export const loginService = async (countryCode, password, phone) => {
  if (!countryCode || !password || !phone) {
    throw new Error("all fields are requird");
  }
  const user = await User.findOne({ phone: phone });
  if (!user) {
    throw new Error("user not exist");
  }
  const checkPass = await bcrypt.compare(password, user.password);
  if (!checkPass) {
    throw new Error("your password is incorrect");
  }
  const payload = {
    phone: phone,
  };
  const token = jwt.sign(payload, secretKey, { expiresIn: "1h" });

  return { user, token };
};
