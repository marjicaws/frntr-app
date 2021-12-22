import { Router } from 'express'
import * as controllers from '../controllers/products.js'

const router = Router()
router.get('/products', controllers.getProducts)
router.get('/products/furniture', controllers.getFurniture)
router.get('/products/kitchen', controllers.getKitchen)
router.get('/products/backyard', controllers.getBackyard)
router.get('/products', controllers.createProduct)
router.get('/products/:id', controllers.updateProduct)
router.get('/products/:id', controllers.deleteProduct)
router.get('/products/:id', controllers.getProduct)
export default router