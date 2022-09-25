import express from "express";
const app = express();
import multer from "multer";
import cors from "cors";
import UserRouter from "./Routes/user.js";
import PostRouter from "./Routes/post.js";
app.use(express.json());
app.use(cors());
// app.use(cors({ origin: true, credentials: true }));

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
//mildware
app.use((err, req, res, next) => {
  return res.json("i am errorrrrrr" + err);
});

//multer
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(nill, "../clients/blogpost/public/uploads/");
  },
  filename: (req, file, callbacl) => {
    callback(null, file.originalname);
  },
});
export const uploads = multer({ storage: storage });
app.post("/post/create", uploads.single("orignalname"), (req, res) => {
  res.json("File has been uploaded");
});
app.listen("3001", (req, res) => {
  connect();
  console.log("server is running on 3001");
});
