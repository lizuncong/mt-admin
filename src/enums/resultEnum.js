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
    code: 10006,
    msg: '用户未登录'
  },
  FILE_TOO_LARGE: {
    code: 10007,
    msg: '文件体积超过限制'
  },
  EDIT_USER_INFO_FAIL: {
    code: 10008,
    msg: '修改用户信息失败'
  },
  PASSWORD_DIFF: {
    code: 10009,
    msg: '新密码不能和旧密码相同'
  },
  EDIT_PASSWORD_FAIL: {
    code: 10010,
    msg: '修改密码失败'
  },
  CREATE_PRODUCT_ERROR: {
    code: 10011,
    msg: '创建商品失败'
  },
  CREATE_CATEGORY_ERROR: {
    code: 10012,
    msg: '创建商品分类失败'
  },
  EDIT_CATEGORY_INFO_FAIL: {
    code: 10013,
    msg: '更新商品分类信息失败'
  },
  EDIT_PRODUCT_INFO_FAIL: {
    code: 10014,
    msg: '更新商品信息失败'
  }
}
