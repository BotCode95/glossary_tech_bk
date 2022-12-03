import {Router} from 'express'
import {getGlossary, getGlossaryByName, getGlossaryById, postGlosary, updateGlossary, deleteGlossary} from '../controllers/glossary'

const router = Router()


router.get('/', getGlossary)
router.get('/search', getGlossaryByName)
router.get('/:id', getGlossaryById)
router.post('/', postGlosary)
router.put('/:id', updateGlossary)
router.delete('/:id', deleteGlossary)

export default router