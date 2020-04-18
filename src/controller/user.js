import { check, validationResult } from 'express-validator'
import boom from 'boom'
// import jwt from 'jsonwebtoken'
import resultVoUtil from '../utils/resultVoUtil'
import { getAdminUserList, findUser } from '../service/user'
// import constant from '../utils/constant'

// const { JWT_PRIVATE_KEY, JWT_EXPIRES_IN } = constant

export const login = async (req, res, next) => {
  const { email, password } = req.body
  await Promise.all([
    check('email').isEmail().withMessage('邮箱格式不正确').run(req),
    check('password').isLength({ min: 6 }).withMessage('密码不能少于6位').run(req)
  ])
  const result = validationResult(req)

  if (!result.isEmpty()) {
    return next(boom.badRequest('参数不正确', result.array()))
  }

  // 根据用户输入的邮箱密码比对数据库中的用户信息，如果正确，则登录成功并生成token。
  // const token = jwt.sign(
  //   { email },
  //   JWT_PRIVATE_KEY,
  //   { expiresIn: JWT_EXPIRES_IN }
  // )
  req.session.username = email
  req.session.password = password
  const userList = await getAdminUserList()
  const data = resultVoUtil.success({ token: 'test' }, '登录成功')
  res.json(data)
}

export const getUserInfo = async (req, res, next) => {
  const user = await findUser(req.email)
  const result = resultVoUtil.success(user)
  res.json(result)
}
