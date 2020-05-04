import express from 'express'
import { create, getList, updateCategory, deleteCategory } from '../controller/category'

const router = express.Router()

router.post('/create', create)
router.post('/list', getList)
router.post('/update', updateCategory)
router.post('/delete', deleteCategory)

export default router
