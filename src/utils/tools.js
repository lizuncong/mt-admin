import crypto from 'crypto'
import jwt from 'jsonwebtoken'
import constant from './constant'
import config from '../config'

const { JWT_PRIVATE_KEY } = constant
const { CRYPTO_SECRET_KEY } = config

export function md5 (content) {
  const str = `content=${content}&key=${CRYPTO_SECRET_KEY}`
  const md5 = crypto.createHash('md5')
  return md5.update(str).digest('hex')
}
