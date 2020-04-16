import { DataTypes } from 'sequelize'
import seq from '../index'
import User from './user'

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

export default Product
