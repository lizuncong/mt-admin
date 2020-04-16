import { DataTypes } from 'sequelize'
import seq from '../index'
import { md5 } from '../../utils/tools'

const User = seq.define('user', {
  // id会自动创建，并设为主键，而且自增
  userName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    set (value) {
      this.setDataValue('password', md5(value))
    }
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  nickname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
})

export default User
