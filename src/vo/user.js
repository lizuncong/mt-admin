import { userEnum } from 'src/enums'
import constants from 'src/utils/constant'

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
