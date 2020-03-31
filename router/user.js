const express = require('express')
const router = express.Router()

router.get('/info', function(req, res, next){
  res.json('user info....');
})

router.post('/login', function(req, res){
  console.log(req.body)
  res.json({
    code: 0,
    msg: '登录成功'
  })
})

module.exports = router
