import express from "express"
import dotenv from "dotenv"
import cookieparser from "cookie-parser"

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";

import { connectDB } from "./lib/db.js";

dotenv.config()
const app = express();

const PORT = process.env.PORT

app.use(express.json());
app.use(cookieparser());

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

app.listen(PORT, () => {
    console.log("server is running on PORT:" + PORT);
    connectDB()
});