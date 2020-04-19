/*
* 登录验证中间件
* 在白名单中的接口不需要验证
* */

const whiteList = [
  '/',
  '/user/login'
]
const loginCheck = (req, res, next) => {
  // 白名单中的接口不需要登录验证
  if (whiteList.find(i => i === req.path)) {
    next()
    return
  }
  if (req.session.username) {
    next()
    return
  }
  res.json({
    msg: '未登录',
    info: 'req.session.username没找到'
  })
}

export default loginCheck
