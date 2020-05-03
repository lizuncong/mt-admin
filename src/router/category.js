import express from 'express'
import { create, getList } from '../controller/category'

const router = express.Router()

router.post('/create', create)
router.post('/list', getList)

export default router
