import express from 'express'
import { login, register, isPhoneExist } from '../controller/user'

const router = express.Router()

router.post('/login', login)
router.post('/register', register)
router.post('/isPhoneExist', isPhoneExist)
export default router
