import express from "express";
import { getListStudent } from "../controllers/user.controllers.js";

const userRouters = express.Router();

userRouters.get("/get-list-user", getListStudent)

export default userRouters;