const crypto = require('crypto')
const jwt = require('jsonwebtoken')
const { PWD_SALT, JWT_PRIVATE_KEY } = require('./constant')

function md5(pwd){
  // 注意参数需要为String类型，否则会出错
  const s = `${pwd}${PWD_SALT}`
  return crypto.createHash('md5')
    .update(String(s)).digest('hex')
}

function decoded(req){
  let token = req.get('Authorization') || ''
  token = token.replace('Bearer', '').trim()
  return jwt.verify(token, JWT_PRIVATE_KEY)
}

module.exports = {
  md5,
  decoded
}
