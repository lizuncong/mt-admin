import seq from '../index'
import User from './user'
import Product from './product'
import Category from './category'

User.hasMany(Product, {
  onUpdate: 'CASCADE',
  onDelete: 'CASCADE'
})

Product.belongsTo(User)

User.hasMany(Category, {
  onUpdate: 'CASCADE',
  onDelete: 'CASCADE'
})

Category.belongsTo(User)

Category.hasMany(Product, {
  onUpdate: 'CASCADE',
  onDelete: 'CASCADE'
})

Product.belongsTo(Category)

const sync = () => {
  return seq.sync({ alter: true })
}

export default { sync }

export {
  User,
  Product,
  Category
}
