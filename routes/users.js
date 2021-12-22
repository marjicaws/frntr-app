import { Router } from "express";
import * as controllers from "../controllers/users"



export const router = Router()

router.post('/account/signUp', controllers.signUp)
router.post('/account/signIn', controllers.signIn)
router.get('/account/verify', controllers.verify)
