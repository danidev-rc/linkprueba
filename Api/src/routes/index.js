import { Router } from 'express'
import authRoutes from './auth.routes.js'
import linkRoutes from './link.routes.js'
import tagRoutes from './tag.routes.js'

const router = Router()

router.use('/auth', authRoutes)
router.use('/links', linkRoutes)
router.use('/tags', tagRoutes)

export default router
