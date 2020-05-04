import { parseTime } from '../utils'

export default class CategoryVo {
  constructor (opts) {
    const user = opts.user || {}
    this.categoryId = opts.id
    this.categoryName = opts.name
    this.categoryCode = opts.code
    this.createdAt = parseTime(opts.createdAt)
    this.createdUser = user.userName
    this.userPhone = user.phone
  }
}
