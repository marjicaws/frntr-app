import { Router } from "express";
import productsRoutes from "./products.js";
import usersRoutes from "./users.js";

const router = Router();

router.get("/", (req, res) => res.send("This is furniture API"));
router.use("/", productsRoutes);
router.use("/", usersRoutes);

export default router;
