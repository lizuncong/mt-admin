import { productEnum } from '../enums'
import { parseTime } from '../utils'

export default class ProductVo {
  constructor (opts) {
    const user = opts.user || {}
    const category = opts.category || {}
    this.productId = opts.id
    this.productName = opts.name
    this.productPrice = opts.price
    this.productStatus = opts.status
    this.productStatusStr = productEnum.getMsgByCode(opts.status)
    this.productImages = opts.image ? opts.image.split(';') : []
    this.createdAt = parseTime(opts.createdAt, '{y}-{m}-{d}')
    this.createUser = user.userName
    this.description = opts.description
    this.categoryName = category.name
    this.categoryCode = category.code
  }
}
