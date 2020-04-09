const Sequelize = require('sequelize')
const seq = require('../index')


const User = seq.define('user', {
  // id会自动创建，并设为主键，而且自增
  userName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  nickname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  status: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
})

module.exports = User
