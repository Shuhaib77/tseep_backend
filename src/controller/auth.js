import { loginService, registerService } from "../services/authservice.js";

export const register = async (req, res) => {
  const { name, email, phone, status, password, countryCode } = req.body;
  if (!name || !email || !phone || !status || !password || !countryCode) {
    req.res.status(404).json("all fields are requird");
  }
  const data = await registerService(
    name,
    email,
    phone,
    status,
    password,
    countryCode
  );
  if (!data) {
    res.status(404).json({ message: "registeration failed" });
  }
  res.status(200).json({ message: "registeration successfull" });
};

export const login = async (req, res) => {
  const { countryCode, phone, password } = req.body;
  if (!countryCode || !password || !phone) {
    req.res.status(404).json("all fields are requird");
  }
  const data = await loginService(countryCode, password, phone);
  const { user, token } = data;
  if (!data) {
    res.status(404).json({ message: "Login failed", data: data });
  }
//   res.cookie("authToken", token, {
//     httpOnly: true,  // Prevents JavaScript access (XSS protection)
//     secure: true,  // Cookie is only sent over HTTPS
//     sameSite: "strict",  // Prevents CSRF (Cross-Site Request Forgery)
//     maxAge: 24 * 60 * 60 * 1000,  // Cookie expires in 1 day
//   });

  res
    .status(200)
    .json({ message: "Login successfull", token: token, data: user });
};
