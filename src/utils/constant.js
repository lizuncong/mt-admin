import path from 'path'

export default {
  PWD_SALT: 'mt_admin', // md5加密密码
  JWT_PRIVATE_KEY: 'mt_admin_jwt',
  JWT_EXPIRES_IN: 30 * 60, // 单位为秒
  LOG_INTERVAL: '1h', // 日志打印时间间隔
  DEFAULT_AVATAR: 'http://xxxxxx.png', // 用户默认头像
  UPLOAD_FILE_DEST: path.join(__dirname, '../upload-files/'), // 上传文件目录
  ROUTE_PREFIX: '/api/'
}
