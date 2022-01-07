import { Router } from "express";
import * as controllers from "../controllers/users.js";
import { restrict } from "../helpers/restrict.js";
const router = Router();

router.post("/account/signup", controllers.signUp);
router.post("/account/signin", controllers.signIn);
router.get("/account/verify", controllers.verify);
router.get("/users/:id/cart", controllers.getCart);
router.post("/users/:id/cart/:cartItemId", restrict, controllers.addToCart);
router.delete(
  "/users/:id/cart/:cartItemId",
  restrict,
  controllers.removeFromCart
);
router.delete("/users/:id/cart", restrict, controllers.clearCart);

export default router;
