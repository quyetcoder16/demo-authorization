import express from "express";
import userRouters from "./user.routers.js";
import { authPage, authUser } from "../middlewares/Auth.Middlewares.js";

const rootRouters = express.Router();

rootRouters.use("/user", authUser, authPage(["ADM","MOD"]), userRouters);

export default rootRouters;