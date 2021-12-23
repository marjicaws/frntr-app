import { Router } from "express";
import * as controllers from "../controllers/products.js";
// import restrict from "../helpers/restrict.js";

const router = Router();
router.get("/products", controllers.getProducts);
router.get("/products/furniture", controllers.getFurniture);
router.get("/products/kitchen", controllers.getKitchen);
router.get("/products/backyard", controllers.getBackyard);
router.post("/products", controllers.createProduct);
router.put("/products/:id", controllers.updateProduct);
router.delete("/products/:id", controllers.deleteProduct);
router.get("/products/:id", controllers.getProduct);
export default router;
