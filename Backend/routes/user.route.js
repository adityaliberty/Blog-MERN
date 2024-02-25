import express from "express";
import { test } from "../controllers/user.controller.js";

export const userRoutes = express.Router();

userRoutes.get("/health-check", test);
