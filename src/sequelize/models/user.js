import dataTypes from '../dataTypes'
import seq from '../index'
import { md5 } from '../../utils/tools'
import { userEnum } from '../../enums'

const User = seq.define('user', {
  userName: {
    type: dataTypes.STRING,
    allowNull: false
  },
  password: {
    type: dataTypes.STRING,
    allowNull: false,
    set (value) {
      this.setDataValue('password', md5(value))
    }
  },
  phone: {
    type: dataTypes.STRING,
    allowNull: false
    // unique: true // 这样定义索引会有问题
  },
  gender: {
    type: dataTypes.DECIMAL,
    allowNull: false,
    defaultValue: userEnum.GENDER_UNKNOWN.code,
    comment: '性别(1男性，2女性 3保密)'
  },
  avatar: {
    type: dataTypes.STRING,
    comment: '头像'
  }
}, { indexes: [{ unique: true, fields: ['phone'] }] }
)

export default User
