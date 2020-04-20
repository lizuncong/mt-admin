import resultVoUtil from '../utils/resultVoUtil'
import { resultEnum } from '../enums'
/*
* 登录验证中间件
* 在白名单中的接口不需要验证
* */

const whiteList = [
  '/',
  '/user/login',
  '/user/register',
  '/user/isPhoneExist'
]
const loginCheck = (req, res, next) => {
  // 白名单中的接口不需要登录验证
  if (whiteList.find(i => i === req.path)) {
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
