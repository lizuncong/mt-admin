const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const router = require('./router')


const app = express()

app.use(cors()) // 解决跨域的问题
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', router)
// app.get('/', function(req, res){
//   throw new Error('get error...')
//   res.send('hello express')
// })



// 异常处理, 异常处理中间件需要放在最后已捕获异常
// const errorHandler = function(err, req, res, next){
//   console.log('errorHandler......')
//   res.status(500).json({
//     error: -1,
//     msg: err.toString()
//   })
// }
//
// app.use(errorHandler)


const server = app.listen(5000, () => {

  const { address, port } = server.address()
  // console.log('address..', server.address())
  console.log('HTTP服务启动成功: http://%s:%s', address, port)
})
