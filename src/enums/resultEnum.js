// 返回结果状态码
export default {
  USER_NOT_EXIST: { // 用户不存在
    code: 10001,
    msg: '用户不存在'
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
