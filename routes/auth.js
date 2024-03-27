import express from "express";
import { signUp } from "../modules/auth/auth.js";

export const authRoutes = express.Router();

authRoutes.post("/sign-up", signUp);
