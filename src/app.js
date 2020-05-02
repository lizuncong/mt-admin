import path from 'path'
import express from 'express'
import logger from 'morgan'
import session from 'express-session'
import ConnectRedis from 'connect-redis'
import * as rfs from 'rotating-file-stream'
import boom from 'boom'
// import cors from 'cors'
import models from './sequelize/models'
import config from './config'
import router from './router'
import RedisClient from './redis'
import resultVoUtil from './utils/resultVoUtil'
import LoginCheck from './middleware/loginCheck'
import { generateLogFileName } from './utils/log'
import constants from './utils/constant'
import { resultEnum } from './enums'
const { LOG_INTERVAL, UPLOAD_FILE_DEST, ROUTE_PREFIX } = constants

const app = express()

const RedisStore = ConnectRedis(session)

// app.use(cors()) // 解决跨域的问题

// 开发环境，日志直接打印到控制台
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
app.use('/api', express.static(path.resolve(__dirname, 'public')))
app.use('/api', express.static(UPLOAD_FILE_DEST))

app.use(session({
  name: 'mt_admin_sid',
  store: new RedisStore({ client: RedisClient, prefix: 'mt_admin_sess:' }),
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

app.use(ROUTE_PREFIX, router)

/*
* 如果路由没有匹配到 ROUTE_PREFIX: /api/*
* 则抛出接口不存在异常
* */
app.use((req, res, next) => {
  next(boom.notFound('接口不存在'))
})

app.use((err, req, res, next) => {
  console.log('全局异常捕获')
  console.log(err)
  // multer抛出的异常
  if (err && err.name === 'MulterError') {
    const { code, field } = err
    if (code === 'LIMIT_FILE_SIZE') {
      res.json(resultVoUtil.error(resultEnum.FILE_TOO_LARGE.code,
        field + resultEnum.FILE_TOO_LARGE.msg))
    }
    return
  }
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
