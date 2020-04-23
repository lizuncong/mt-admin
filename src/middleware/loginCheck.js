import resultVoUtil from '../utils/resultVoUtil'
import { resultEnum } from '../enums'
import constants from '../utils/constant'

const { ROUTE_PREFIX } = constants
/*
* 登录验证中间件
* 在白名单中的接口不需要验证
* */

const whiteList = [
  '',
  'user/login',
  'user/register',
  'user/isPhoneExist'
]
const loginCheck = (req, res, next) => {
  // 白名单中的接口不需要登录验证
  if (whiteList.findIndex(i => (ROUTE_PREFIX + i) === req.path) > -1) {
    next()
    return
  }
  if (req.session.userInfo && req.session.userInfo.phone) {
    next()
    return
  }
  res.json(resultVoUtil.error(
    resultEnum.USER_NOT_LOGIN.code,
    resultEnum.USER_NOT_LOGIN.msg,
    'req.session.userInfo.phone没找到'
  ))
}

export default loginCheck
