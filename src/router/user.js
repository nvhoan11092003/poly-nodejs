import express from "express";
import { signinUser, createUser } from "../controller/user";
const usersRouter = express.Router();

usersRouter.get("/signin", signinUser);
usersRouter.post("/signup", createUser);

export default usersRouter;
