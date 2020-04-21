import dataTypes from '../dataTypes'
import seq from '../index'
import { productEnum } from '../../enums/'

const Product = seq.define('product', {
  name: {
    type: dataTypes.STRING,
    allowNull: false
  },
  price: {
    type: dataTypes.INTEGER,
    allowNull: false
  },
  image: {
    type: dataTypes.STRING
  },
  status: {
    type: dataTypes.STRING,
    allowNull: false,
    defaultValue: productEnum.UP.code,
    comment: '状态(1上架，2下架)'
  },
  description: {
    type: dataTypes.STRING,
    allowNull: false
  }
})

export default Product
