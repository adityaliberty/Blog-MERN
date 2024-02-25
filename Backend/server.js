import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import { dbConnection } from "./dbConnection/index.js";
import morgan from "morgan";

const app = express();
dotenv.config();
dbConnection();

app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});

// logs incoming requests with endpoint and response time
app.use(morgan(":method :url :response-time"));
app.use("/api/user", userRoutes);
