import seq from '../index'
import User from './user'
import Product from './product'

User.hasMany(Product, {
  onUpdate: 'CASCADE',
  onDelete: 'CASCADE'
})

Product.belongsTo(User)

const sync = () => {
  return seq.sync({ alter: true })
}

export default { sync }

export {
  User,
  Product
}
