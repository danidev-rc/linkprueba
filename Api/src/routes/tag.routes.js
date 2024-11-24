import { Router } from 'express'
import { createTag, getTags, updateTag, deleteTag } from '../controllers/tag.controller.js'
import { authRequired } from '../middlewares/validateToken.js'
import { validateSchema } from '../middlewares/validator.middleware.js'
import { createTagSchema, updateTagSchema } from '../schemas/tag.schema.js'

const router = Router()

router.post('/', authRequired, validateSchema(createTagSchema), createTag)
router.get('/', authRequired, getTags)
router.put('/:id', authRequired, validateSchema(updateTagSchema), updateTag)
router.delete('/:id', authRequired, deleteTag)

export default router
