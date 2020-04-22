import express from 'express'
import { create, getProductList, getProductListFromRedis } from '../controller/product'
import generateValidator from '../middleware/validate'
import validate from '../json-validate'

const { productValidate } = validate

const router = express.Router()

router.post('/create', generateValidator(productValidate), create)
router.post('/list', getProductList)
router.post('/list/cache', getProductListFromRedis) // 利用redis缓存存储高频访问数据的demo
export default router
