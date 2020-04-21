import express from 'express'
import { create } from '../controller/product'

const router = express.Router()

router.post('/create', create)
export default router
