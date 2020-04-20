// 返回结果状态码
export default {
  USER_NOT_EXIST: { // 用户不存在
    code: 10001,
    msg: '用户不存在'
  },
  USER_EXIST: { // 用户已存在
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
  PRODUCT_STOCK_ERROR: {
    code: 11,
    msg: '商品库存不正确'
  },
  ORDER_NOT_EXIST: {
    code: 12,
    msg: '订单不存在'
  },
  PRODUCT_DETAIL_NOT_EXIST: {
    code: 13,
    msg: '订单详情不存在'
  }
}
