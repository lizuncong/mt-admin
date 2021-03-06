const enums = []

class ProductEnum {
  constructor (code, msg) {
    this.code = code
    this.msg = msg
    enums.push(this)
  }
}

export default {
  UP: new ProductEnum('1', '已上架'),
  DOWN: new ProductEnum('2', '已下架'),
  getMsgByCode (code) {
    const findItem = enums.find(item => item.code === code)
    return findItem && findItem.msg
  }
}
