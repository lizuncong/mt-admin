import express from 'express'
import { create } from '../controller/product'
import generateValidator from '../middleware/validate'
import validate from '../json-validate'

const { productValidate } = validate

const router = express.Router()

router.post('/create', generateValidator(productValidate), create)
export default router
