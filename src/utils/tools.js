const crypto = require('crypto')
const jwt = require('jsonwebtoken')
const { JWT_PRIVATE_KEY } = require('./constant')
const { CRYPTO_SECRET_KEY } = require('../config')

function md5 (content) {
  const str = `content=${content}&key=${CRYPTO_SECRET_KEY}`
  const md5 = crypto.createHash('md5')
  return md5.update(str).digest('hex')
}

function decoded (req) {
  let token = req.get('Authorization') || ''
  token = token.replace('Bearer', '').trim()
  if (token) {
    return jwt.verify(token, JWT_PRIVATE_KEY)
  } else {
    return {}
  }
}

module.exports = {
  md5,
  decoded
}
