import express from "express";
import { getListStudent } from "../controllers/user.controllers.js";

const userRouters = express.Router();

userRouters.get("/get-list-student", getListStudent)

export default userRouters;