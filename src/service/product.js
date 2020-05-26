import { Product, User } from '../sequelize/models'

export const createProduct = async ({ name, price, image, description, userId, categoryId }) => {
  return await Product.create({
    name, price, image, description, userId, categoryId
  })
}

export const findAllProducts = async ({ pageNo, pageSize, userId }) => {
  const whereOpts = {}
  if (userId) {
    whereOpts.id = userId
  }

  return await Product.findAndCountAll({
    limit: Number(pageSize),
    offset: pageNo * pageSize,
    order: [
      ['id', 'desc']
    ],
    include: [
      {
        model: User,
        attributes: ['userName', 'phone'],
        where: whereOpts
      }
    ]
  })
}
