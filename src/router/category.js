import express from 'express'
import { create, getList, updateCategory } from '../controller/category'

const router = express.Router()

router.post('/create', create)
router.post('/list', getList)
router.post('/update', updateCategory)

export default router
