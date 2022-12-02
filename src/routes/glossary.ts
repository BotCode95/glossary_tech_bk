import {Router} from 'express'
import {getGlossary,getGlossaryById, postGlosary, updateGlossary, deleteGlossary} from '../controllers/glossary'

const router = Router()


router.get('/', getGlossary)
router.get('/:id', getGlossaryById)
router.post('/', postGlosary)
router.put('/:id', updateGlossary)
router.delete('/:id', deleteGlossary)

export default router