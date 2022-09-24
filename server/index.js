import express from "express";
const app = express();
import cors from "cors";
import UserRouter from "./Routes/user.js";
import PostRouter from "./Routes/post.js";
app.use(express.json());
app.use(cors());
const url =
  "mongodb+srv://armaankhan:armaan242@cluster0.ygbfntv.mongodb.net/?retryWrites=true&w=majority";

import mongoose from "mongoose";
import { AddAPhoto } from "@material-ui/icons";
const connect = async () => {
  try {
    await mongoose.connect(url);
    console.log("we are succefullt connected to mongodb");
  } catch (err) {
    console.log("failed to connet Mongo db ");
  }
};
mongoose.connection.on("disconnected", () => {
  console.log("we are dissconneted");
});
mongoose.connection.on("connected", () => {
  console.log("we are conneted");
});
app.use("/user", UserRouter);
app.use("/post", PostRouter);
//
app.use((err, req, res, next) => {
  return res.json("i am errorrrrrr" + err);
});
app.listen("3001", (req, res) => {
  connect();
  console.log("server is running on 3001");
});
