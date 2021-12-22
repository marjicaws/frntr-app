import { Router } from 'express'
import * as controllers from '../controllers/products.js'

const router = Router()
router.get('/products', controllers.getProducts)
router.get('/products/furniture', controllers.getFurniture)
router.get('/products/kitchen', controllers.getKitchen)
router.get('/products/backyard', controllers.backyard)
router.get('/products', controllers.createProduct)
router.get('/products/:id', contollers.updateProduct)
router.get('/products/:id', controllers.deleteProduct)
export default router