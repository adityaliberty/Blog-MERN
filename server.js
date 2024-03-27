import express from "express";
import dotenv from "dotenv";
import { dbConnection } from "./dbConnection/index.js";
import morgan from "morgan";
import { authRoutes } from "./routes/auth.js";
import { userRoutes } from "./routes/user.js";
import bodyParser from "body-parser";
const app = express();

// Load environment variables from .env file
dotenv.config();

// dbConnection();
// Middlewares
app.use(express.json()); // Additional JSON parsing middleware
app.use(bodyParser.json()); // Parse JSON bodies
app.use(morgan(":method :url :response-time")); // Logging middleware

// Mount routes
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
