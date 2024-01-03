import express from "express";
import userRouters from "./user.routers.js";

const rootRouters = express.Router();

rootRouters.use("/user", userRouters);

export default rootRouters;