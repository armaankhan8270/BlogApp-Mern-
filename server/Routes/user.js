import express from "express";

import { CreateUser, GetAllUser, Login } from "../Controllers/user.js";
const router = express.Router();

//add  user to data base
router.post("/register", CreateUser);
router.get("/allusers", GetAllUser);
router.post("/login", Login);

export default router;
