import express from "express";
import { login, register } from "../controller/auth.js";

const authRoute=express.Router()


authRoute.post("/register",register)
authRoute.post("/login",login)

export default authRoute
