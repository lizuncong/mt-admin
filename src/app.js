import path from 'path'
import express from 'express'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
// import cors from 'cors'
import models from './sequelize/models'

import router from './router'

const app = express()

// app.use(cors()) // 解决跨域的问题
app.use(express.static(path.resolve(__dirname, 'public')))
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', router)

console.log('models...', models)

const promise = models.sync().catch(err => console.error(err.stack))

promise.then(() => {
  const server = app.listen(5000, () => {
    const { address, port } = server.address()
    // console.log('address..', server.address())
    console.log('HTTP服务启动成功: http://%s:%s', address, port)
  })
})
