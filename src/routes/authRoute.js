import express from "express";
import { login, register } from "../controller/auth.js";
import tryCatch from "../middleware/tryCatch.js";
import { errorHndler } from "../middleware/globelError.js";

const authRoute = express.Router();

authRoute.post("/register", errorHndler, tryCatch(register));
authRoute.post("/login", errorHndler, tryCatch(login));

export default authRoute;
