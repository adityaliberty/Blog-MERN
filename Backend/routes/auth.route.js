import express from "express";
import { signUp } from "../controllers/auth.controller.js";

export const authRoutes = express.Router();

authRoutes.post("/sign-up", signUp);
