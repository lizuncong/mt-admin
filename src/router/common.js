import multer from 'multer'
import express from 'express'
import constants from '../utils/constant'
import { uploadFiles } from '../controller/common'

const router = express.Router()
const { UPLOAD_FILE_DEST } = constants

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, UPLOAD_FILE_DEST)
  },
  filename: function (req, file, cb) {
    const { fieldname, originalname } = file
    const parts = originalname.split('.')
    const extensions = parts[parts.length - 1] || ''
    cb(null, fieldname + '-' + Date.now() + '.' + extensions)
  }
})

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 // 文件体积最大1M
  }
})

router.post('/upload', upload.any(), uploadFiles)

// 客户端上传文件的字段必须为avatar，而且是单个文件
// router.post('/upload', upload.single('avatar'), async (req, res, next) => {
//   console.log(req.file)
//   res.json({
//     msg: 'upload'
//   })
// })

// // 客户端上传文件的字段必须为photos
// router.post('/upload/files', upload.array('photos', 12), function (req, res, next) {
//   // req.files is array of `photos` files
//   // req.body will contain the text fields, if there were any
// })

// 客户端上传文件可以使用不同的字段
// const cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])
// router.post('/cool-profile', cpUpload, function (req, res, next) {
// req.files is an object (String -> Array) where fieldname is the key, and the value is array of files
//
// e.g.
//  req.files['avatar'][0] -> File
//  req.files['gallery'] -> Array
//
// req.body will contain the text fields, if there were any
// })

export default router
