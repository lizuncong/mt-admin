// 返回结果状态码
export default {
  USER_NOT_EXIST: {
    code: 10001,
    msg: '用户不存在'
  },
  USER_EXIST: {
    code: 10002,
    msg: '用户已存在'
  },
  REGISTER_ERROR: {
    code: 10003,
    msg: '注册失败'
  },
  JSON_SCHEMA_ERROR: {
    code: 10004,
    msg: '参数格式不正确'
  },
  LOGIN_ERROR: {
    code: 10005,
    msg: '用户名或密码不正确'
  },
  USER_NOT_LOGIN: {
    code: 1006,
    msg: '用户未登录'
  },
  FILE_TOO_LARGE: {
    code: 1007,
    msg: '文件体积超过限制'
  }
}
