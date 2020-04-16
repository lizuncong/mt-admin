import express from 'express'
import boom from 'boom'
import jwt from 'express-jwt'
import resultVoUtil from '../utils/resultVoUtil'
import userRouter from './user'
import productRouter from './product'
// import { decoded } from '../utils/tools'

import constant from '../utils/constant'

const { JWT_PRIVATE_KEY } = constant

// 注册路由
const router = express.Router()

// jwt，所有接口都需要进行鉴权验证，除非在白名单中的接口
// 客户端的请求头要设置authorization = 'Bearer ' + token，这样express-jwt才能取到token，
// 否则会报错：token验证失败
// express-jwt中间件会自动解析token的信息，可通过req.user获取
router.use(jwt({
  secret: JWT_PRIVATE_KEY,
  credentialsRequired: true
}).unless({
  path: [
    '/',
    '/user/login'
  ]
}))

router.get('/', function (req, res) {
  res.send('欢迎进入后台管理系统')
})

router.use('/user', userRouter)
router.use('/product', productRouter)

/*
* 集中处理404请求的中间件
* 注意：该中间件必须放在正常处理流程之后
* 否则，会拦截正常的请求
* */
router.use((req, res, next) => {
  next(boom.notFound('接口不存在'))
})

/*
* 自定义路由异常处理中间件
* 注意两点：
* 第一，方法的参数不能减少
* 第二，方法必须放在路由最后
* */
router.use((err, req, res, next) => {
  // console.log('全局异常捕获。。。。', err)
  if (err && err.name === 'UnauthorizedError') {
    const { status = 401, message } = err
    const result = resultVoUtil.error(status, 'Token验证失败', message)
    res.status(status)
    res.json(result)
    return
  }
  const msg = (err && err.message) || '系统错误'
  const data = err && err.data
  const statusCode = (err.output && err.output.statusCode) || 500
  const result = resultVoUtil.error(statusCode, msg, data)
  res.status(statusCode)
  res.json(result)
})

export default router
