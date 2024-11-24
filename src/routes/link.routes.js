import { Router } from 'express'
import { createLink, getLinks, updateLink, deleteLink, redirectLink, searchLinks } from '../controllers/link.controller.js'
import { authRequired } from '../middlewares/validateToken.js'
import { validateSchema } from '../middlewares/validator.middleware.js'
import { createLinkSchema, updateLinkSchema } from '../schemas/link.schema.js'

const router = Router()

router.post('/', authRequired, validateSchema(createLinkSchema), createLink)
router.get('/', authRequired, getLinks)
router.put('/:id', authRequired, validateSchema(updateLinkSchema), updateLink)
router.delete('/:id', authRequired, deleteLink)
router.get('/:linky', redirectLink)
router.get('/search/:query', authRequired, searchLinks)

export default router
