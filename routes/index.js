import { Router } from 'express'
import productsRoutes from './products'
import usersRoutes from './users'

export const router = Router()

router.get('/', (req, res) => res.send('This is furniture API'))
router.use('/', productsRoutes)
router.use('/', usersRoutes)
