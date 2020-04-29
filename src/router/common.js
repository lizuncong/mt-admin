import express from 'express'
import { uploadFiles } from '../controller/common'
import upload from '../middleware/parseForm'

const router = express.Router()

router.post('/upload', upload.any(), uploadFiles)

export default router
