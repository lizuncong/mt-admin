import dataTypes from '../dataTypes'
import seq from '../index'

const Category = seq.define('category', {
  name: {
    type: dataTypes.STRING,
    allowNull: false
  },
  code: {
    type: dataTypes.STRING,
    allowNull: false
  }
}, { indexes: [{ unique: true, fields: ['name'] }] })

export default Category
