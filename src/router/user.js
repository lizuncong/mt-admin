import express from 'express'
import {
  login, logout, getInfo, register, isPhoneExist, editUserInfo, editPassword
} from '../controller/user'
import generateValidator from '../middleware/validate'
import validate from '../json-validate'

const { userValidate } = validate

const router = express.Router()

router.post('/login', login)
router.post('/logout', logout)
router.get('/info', getInfo)
router.post('/register', generateValidator(userValidate), register)
router.post('/isPhoneExist', isPhoneExist)
router.patch('/editUserInfo', generateValidator(userValidate), editUserInfo)
router.patch('/editPassword', generateValidator(userValidate), editPassword)
export default router
