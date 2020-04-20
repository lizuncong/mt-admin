import express from 'express'
import { login, register, isPhoneExist } from '../controller/user'
import generateValidator from '../middleware/validate'
import validate from '../json-validate'

const { userValidate } = validate

const router = express.Router()

console.log('haheeafafads')
router.post('/login', login)
router.post('/register', generateValidator(userValidate), register)
router.post('/isPhoneExist', isPhoneExist)
export default router
