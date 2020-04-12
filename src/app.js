import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

const router = require('./router')

const app = express()

app.use(cors()) // 解决跨域的问题
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', router)

const server = app.listen(5000, () => {
  const { address, port } = server.address()
  // console.log('address..', server.address())
  console.log('HTTP服务启动成功: http://%s:%s', address, port)
})
