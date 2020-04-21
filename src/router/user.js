import express from 'express'
import { login, register, isPhoneExist, editUserInfo } from '../controller/user'
import generateValidator from '../middleware/validate'
import validate from '../json-validate'

const { userValidate } = validate

const router = express.Router()

router.post('/login', login)
router.post('/register', generateValidator(userValidate), register)
router.post('/isPhoneExist', isPhoneExist)
router.patch('/editUserInfo', editUserInfo)
export default router
