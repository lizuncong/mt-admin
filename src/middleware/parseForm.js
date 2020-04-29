import multer from 'multer'
import constants from '../utils/constant'

const { UPLOAD_FILE_DEST } = constants

// diskStorage方式上传文件有弊端，这种方式上传的文件和当前服务在同一台服务器上
// 如果项目部署在多个服务器，那么多个服务器之间的文件不能相互共享，就会出现问题。
// 因此需要考虑使用统一文件服务的方式上传文件
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

export default upload
