import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoutes.js";
import userRouter from "./routes/userRoutes.js";
import "dotenv/config";
import cartRouter from "./routes/cartRoutes.js";
// app config
const app = express();
const port = 4000;

//middleware
app.use(express.json());
app.use(cors());

// Db connection
connectDB();

// api endpoints
app.use("/api/foods", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);

app.get("/", (req, res) => {
  res.send("API working");
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
