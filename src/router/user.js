import express from 'express'
import { login, getUserInfo } from '../controller/user'

const router = express.Router()

router.post('/login', login)
router.post('/info', getUserInfo)
export default router
