import { Product, User, Category } from '../sequelize/models'

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
      },
      {
        model: Category,
        attributes: ['name', 'code']
      }
    ]
  })
}

export const destroy = async ({ productId }) => {
  return await Product.destroy({
    where: {
      id: productId
    }
  })
}

export const update = async ({ productId, ...arg }) => {
  // name, price, image, status, description
  const updateData = {}
  Object.keys(arg).forEach(key => {
    updateData[key] = arg[key]
  })
  return await Product.update(updateData, {
    where: {
      id: productId
    }
  })
}
