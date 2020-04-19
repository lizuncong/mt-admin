import dataTypes from '../dataTypes'
import seq from '../index'
import { md5 } from '../../utils/tools'

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
    allowNull: false,
    unique: true
  },
  gender: {
    type: dataTypes.DECIMAL,
    allowNull: false,
    defaultValue: 3,
    comment: '性别(1男性，2女性 3保密)'
  },
  avatar: {
    type: dataTypes.STRING,
    comment: '头像'
  }
})

export default User
