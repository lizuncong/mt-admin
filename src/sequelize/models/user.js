const { DataTypes } = require('sequelize');
const seq = require('../index')


const User = seq.define('user', {
  // id会自动创建，并设为主键，而且自增
  userName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
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
  },
})

module.exports = User
