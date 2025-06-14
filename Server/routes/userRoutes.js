import express from "express";

import { clerkWebhooks, userCredites } from "../controllers/userController.js";
import authUser from "../middlewares/auth.js";

const userRouter = express.Router();

userRouter.post("/webhooks", clerkWebhooks);
userRouter.get("/credits", authUser, userCredites);

export default userRouter;
