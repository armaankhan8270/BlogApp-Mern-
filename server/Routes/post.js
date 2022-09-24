import express from "express";
import { CreatePost, DeletePost, GetAllPost } from "../Controllers/post.js";

const router = express.Router();

//add  user to data base
router.post("/", CreatePost);
router.get("/", GetAllPost);
router.delete("/:id", DeletePost);

export default router;
