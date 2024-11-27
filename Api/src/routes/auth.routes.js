import { Router } from 'express'
import {
  register,
  verifyToken,
  login,
  logout,
  profile,
  refreshToken
} from '../controllers/auth.controller.js'
import { validateSchema } from '../middlewares/validator.middleware.js'
import { registerSchema, loginSchema } from '../schemas/auth.schema.js'

const router = Router()

router.post('/register', validateSchema(registerSchema), register)
router.post('/login', validateSchema(loginSchema), login)
router.get('/profile', profile)
router.post('/logout', logout)
router.get('/verify', verifyToken)
router.post('/refresh-token', refreshToken)

export default router
