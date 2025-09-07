import { Router } from 'express'
import { signUp, signIn } from '../controllers/UserController.js'

const router = Router()

// Rekisteröityminen
router.post("/signup", signUp)

// Kirjautuminen
router.post("/signin", signIn)

export default router