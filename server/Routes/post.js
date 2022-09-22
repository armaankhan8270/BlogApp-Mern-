import express from "express";
import { CreatePost, GetAllPost } from "../Controllers/post.js";

const router = express.Router();

//add  user to data base
router.post("/", CreatePost);
router.get("/", GetAllPost);

export default router;
