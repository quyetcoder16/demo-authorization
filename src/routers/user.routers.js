import express from "express";
import { getListStudent } from "../controllers/user.controllers.js";
import { authPage, authUser } from "../middlewares/Auth.Middlewares.js";

const userRouters = express.Router();

userRouters.get("/get-list-user", authUser, authPage(["ADM", "MOD"]), getListStudent)

export default userRouters;