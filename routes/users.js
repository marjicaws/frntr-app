import { Router } from "express";
import * as controllers from "../controllers/users.js";

const router = Router();

router.post("/account/signup", controllers.signUp);
router.post("/account/signin", controllers.signIn);
router.get("/account/verify", controllers.verify);

export default router;
