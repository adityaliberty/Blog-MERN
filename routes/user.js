import express from "express";
import { healthCheck } from "../modules/user/user.js";

export const userRoutes = express.Router();

userRoutes.get("/health-check", healthCheck);
