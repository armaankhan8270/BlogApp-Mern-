import express from "express";
const app = express();
const url =
  "mongodb+srv://armaankhan:armaan242@cluster0.ygbfntv.mongodb.net/?retryWrites=true&w=majority";

import mongoose from "mongoose";
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

app.listen("3001", (req, res) => {
  connect();
  console.log("server is running on 3001");
});
