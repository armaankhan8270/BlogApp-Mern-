import express from "express";

import { CreateUser, GetAllUser } from "../Controllers/user.js";
const router = express.Router();

//add  user to data base
router.post("/", CreateUser);
router.get("/", GetAllUser);

export default router;
