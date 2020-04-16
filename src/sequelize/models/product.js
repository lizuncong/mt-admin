import { DataTypes } from 'sequelize'
import seq from '../index'

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

export default Product
