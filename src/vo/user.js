import constants from '../utils/constant'
import { userEnum } from '../enums'

export default class UserVo {
  constructor (opts) {
    this.userId = opts.id
    this.userName = opts.userName
    this.phone = opts.phone
    this.gender = opts.gender
    this.genderStr = userEnum.getGenderStrByCode(opts.gender)
    this.avatar = opts.avatar || constants.DEFAULT_AVATAR
  }
}
