import express from 'express'
import { create, getProductList, getProductListFromRedis, deleteProduct, updateProduct } from '../controller/product'
import generateValidator from '../middleware/validate'
import validate from '../json-validate'
import upload from '../middleware/parseForm'

const { productValidate } = validate

const router = express.Router()

router.post('/create', upload.any(), generateValidator(productValidate), create)
router.post('/update', upload.any(), generateValidator(productValidate), updateProduct)
router.post('/delete', deleteProduct)
router.post('/list', getProductList)
router.post('/list/cache', getProductListFromRedis) // 利用redis缓存存储高频访问数据的demo
export default router
