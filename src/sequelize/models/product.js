import dataTypes from '../dataTypes'
import seq from '../index'

const Product = seq.define('product', {
  productName: {
    type: dataTypes.STRING,
    allowNull: false
  },
  productPrice: {
    type: dataTypes.INTEGER,
    allowNull: false
  },
  productDescription: {
    type: dataTypes.STRING,
    allowNull: false
  }
})

export default Product
