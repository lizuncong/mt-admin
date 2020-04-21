import { Product } from '../sequelize/models'

export const createProduct = async ({ name, price, image, description, userId }) => {
  return await Product.create({
    name, price, image, description, userId
  })
}
