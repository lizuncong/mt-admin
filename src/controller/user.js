import { check, validationResult } from 'express-validator'
import boom from 'boom'
import resultVoUtil from '../utils/resultVoUtil'
import UserVo from '../vo/user'
import { resultEnum } from '../enums'
import { md5 } from '../utils/tools'
import { getUserInfo, createUser, updateUser } from '../service/user'

export const login = async (req, res, next) => {
  const { phone, password } = req.body
  await Promise.all([
    check('phone').isMobilePhone(['zh-CN']).withMessage('用户名不正确').run(req),
    check('password').isLength({ min: 6 }).withMessage('密码不能少于6位').run(req)
  ])
  const result = validationResult(req)

  if (!result.isEmpty()) {
    return next(boom.badRequest('参数不正确', result.array()))
  }

  const userInfo = await getUserInfo(phone, md5(password))
  if (!userInfo) {
    res.json(resultVoUtil.error(resultEnum.LOGIN_ERROR.code, resultEnum.LOGIN_ERROR.msg))
    return
  }
  req.session.userInfo = userInfo
  res.json(resultVoUtil.success(null, '登录成功'))
}

export const logout = async (req, res, next) => {
  delete req.session.userInfo
  res.json(resultVoUtil.success())
}

export const getInfo = async (req, res, next) => {
  const userInfo = req.session.userInfo
  res.json(resultVoUtil.success(userInfo))
}
export const register = async (req, res, next) => {
  const { userName, password, phone, gender, avatar } = req.body
  const findUser = await getUserInfo(phone)
  if (findUser) {
    // 用户已存在，不能重复注册
    res.json(resultVoUtil.error(resultEnum.USER_EXIST.code, resultEnum.USER_EXIST.msg))
    return
  }
  try {
    const user = await createUser({ userName, password, phone, gender, avatar })
    if (user) {
      res.json(resultVoUtil.success(null, '注册成功'))
    } else {
      res.json(resultVoUtil.error(resultEnum.REGISTER_ERROR.code, resultEnum.REGISTER_ERROR.msg))
    }
  } catch (ex) {
    console.log('注册接口异常', ex.message, ex.stack)
    res.json(resultVoUtil.error(resultEnum.REGISTER_ERROR.code, resultEnum.REGISTER_ERROR.msg))
  }
}

export const isPhoneExist = async (req, res, next) => {
  const { phone } = req.body
  const user = await getUserInfo(phone)
  let data
  if (user) {
    data = resultVoUtil.success(new UserVo(user))
  } else {
    data = resultVoUtil.error(resultEnum.USER_NOT_EXIST.code, resultEnum.USER_NOT_EXIST.msg)
  }
  res.json(data)
}

export const editUserInfo = async (req, res, next) => {
  const { userName, gender, avatar, password } = req.body
  const { phone } = req.session.userInfo
  const result = await updateUser({
    newUserName: userName, newPassword: password, newGender: gender, newAvatar: avatar
  }, { phone })
  if (result && result[0]) {
    const newData = {}
    if (userName) {
      newData.userName = userName
    }
    if (gender) {
      newData.gender = gender
    }
    if (avatar) {
      newData.avatar = avatar
    }
    // 更新session的数据
    Object.assign(req.session.userInfo, newData)
    return res.json(resultVoUtil.success(null, '修改成功'))
  }
  const { code, msg } = resultEnum.EDIT_USER_INFO_FAIL
  res.json(resultVoUtil.error(code, msg))
}

export const editPassword = async (req, res, next) => {
  const { password, newPassword } = req.body
  const { phone } = req.session.userInfo
  if (password === newPassword) {
    const { code, msg } = resultEnum.PASSWORD_DIFF
    return res.json(resultVoUtil.error(code, msg))
  }
  const result = await updateUser({
    newPassword: newPassword
  }, { phone, password: md5(password) })
  if (result && result[0]) {
    return res.json(resultVoUtil.success(null, '修改密码成功'))
  }
  const { code, msg } = resultEnum.EDIT_PASSWORD_FAIL
  res.json(resultVoUtil.error(code, msg))
}
