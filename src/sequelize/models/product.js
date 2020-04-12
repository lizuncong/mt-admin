const { DataTypes } = require('sequelize')
const seq = require('../index')
const User = require('./user')

const Product = seq.define('product', {
  productName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  productPrice: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  productDescription: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

User.hasMany(Product, {
  onDelete: 'CASCADE'
})
Product.belongsTo(User)

module.exports = Product
