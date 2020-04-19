import path from 'path'
import express from 'express'
import logger from 'morgan'
import session from 'express-session'
import ConnectRedis from 'connect-redis'
import * as rfs from 'rotating-file-stream'
// import cors from 'cors'
import models from './sequelize/models'
import config from './config'
import router from './router'
import RedisClient from './redis'
import resultVoUtil from './utils/resultVoUtil'
import LoginCheck from './middleware/loginCheck'
import { generateLogFileName } from './utils/log'
import constants from './utils/constant'

const { LOG_INTERVAL } = constants

const app = express()

const RedisStore = ConnectRedis(session)

// app.use(cors()) // 解决跨域的问题
if (!__DEV__) {
  app.use(logger('dev', {
    stream: process.stdout
  }))
} else {
  const accessLogStream = rfs.createStream(generateLogFileName, {
    interval: LOG_INTERVAL,
    path: path.join(__dirname, '../', 'log')
  })
  app.use(logger('combined', {
    stream: accessLogStream
  }))
}

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// app.use(cookieParser())
app.use(express.static(path.resolve(__dirname, 'public')))

app.use(session({
  name: 'mt_admin_token',
  store: new RedisStore({ client: RedisClient }),
  secret: config.SESSION_SECRET,
  cookie: {
    path: '/',
    httpOnly: true,
    secure: false,
    maxAge: config.COOKIE_MAX_AGE
  }
}))

// 登录验证，如果有接口不需要登录验证，则可以在白名单中配置
app.use(LoginCheck)

app.use('/', router)

/*
* 注意两点：
* 第一，方法的参数不能减少
* 第二，方法必须放在路由最后
* */
app.use((err, req, res, next) => {
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

const promise = models.sync().catch(err => console.error(err.stack))

promise.then(() => {
  const server = app.listen(5000, () => {
    const { address, port } = server.address()
    console.log('HTTP服务启动成功: http://%s:%s', address, port)
  })
})
