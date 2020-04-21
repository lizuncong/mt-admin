import express from 'express'
import boom from 'boom'
import userRouter from './user'
import productRouter from './product'
import commonRouter from './common'

// 注册路由
const router = express.Router()

router.get('/', function (req, res) {
  res.send('home')
})

router.use('/user', userRouter)
router.use('/product', productRouter)
router.use('/common', commonRouter)

/*
* 集中处理404请求的中间件
* 注意：该中间件必须放在正常处理流程之后
* 否则，会拦截正常的请求
* */
router.use((req, res, next) => {
  next(boom.notFound('接口不存在'))
})

export default router
