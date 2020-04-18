/*
* 登录验证中间件
* 在白名单中的接口不需要验证
* */

const whiteList = [
  '/',
  '/user/login'
]
const loginCheck = (req, res, next) => {
  console.log('req.path..', req.path)
  if (whiteList.find(i => i === req.path)) {
    console.log('白名单中的接口不需要登录验证。。')
    next()
    return
  }
  if (req.session.username) {
    console.log('用户已登录过')
    next()
    return
  }
  res.json({
    msg: '未登录',
    info: 'req.session.username没找到'
  })
}

export default loginCheck
