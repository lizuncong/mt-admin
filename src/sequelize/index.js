const Sequelize = require('sequelize')

const seq = new Sequelize('mt_admin', 'root', 'root123456', {
  host: 'localhost',
  dialect: 'mysql'
})


module.exports = seq
