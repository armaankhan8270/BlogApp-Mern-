import express from "express";
import {
  CreatePost,
  DeletePost,
  GetAllPost,
  GetPostByCategorey,
} from "../Controllers/post.js";
// import { uploads } from "../index.js";

const router = express.Router();

//add  user to data base
router.post("/create", CreatePost);
router.get("/", GetAllPost);
router.delete("/:id", DeletePost);
router.get("/Categories", GetPostByCategorey);

export default router;
