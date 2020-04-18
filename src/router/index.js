import express from 'express'
import boom from 'boom'
// import jwt from 'express-jwt'
import resultVoUtil from '../utils/resultVoUtil'
import userRouter from './user'
import productRouter from './product'
// import { decoded } from '../utils/tools'

// import constant from '../utils/constant'

// const { JWT_PRIVATE_KEY } = constant

// 注册路由
const router = express.Router()

// jwt，所有接口都需要进行鉴权验证，除非在白名单中的接口
// 客户端的请求头要设置authorization = 'Bearer ' + token，这样express-jwt才能取到token，
// 否则会报错：token验证失败
// express-jwt中间件会自动解析token的信息，可通过req.user获取
// router.use(jwt({
//   secret: JWT_PRIVATE_KEY,
//   credentialsRequired: true
// }).unless({
//   path: [
//     '/',
//     '/user/login'
//   ]
// }))

router.get('/', function (req, res) {
  res.send('home')
})

router.get('/session', (req, res) => {
  if (!req.session.viewNum) {
    req.session.viewNum = 0
  }
  req.session.viewNum = req.session.viewNum + 1
  if (req.session.email) {
    res.send('已登录')
    return
  }
  res.send('未登录')
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



export default router
