import { Product, User, Category } from '../sequelize/models'
const { Op } = require('sequelize')

export const createProduct = async ({ name, price, image, description, userId, categoryId }) => {
  return await Product.create({
    name, price, image, description, userId, categoryId
  })
}

export const findAllProducts = async ({ pageNo, pageSize, userId, productName }) => {
  const whereOpts = {}
  if (userId) {
    whereOpts.id = userId
  }
  const catWhereOpts = {}
  if (productName) {
    catWhereOpts.name = {
      [Op.substring]: productName // LIKE '%hat%'
    }
  }
  return await Product.findAndCountAll({
    limit: Number(pageSize),
    offset: pageNo * pageSize,
    order: [
      ['categoryId', 'desc']
    ],
    where: catWhereOpts,
    include: [
      {
        model: User,
        attributes: ['userName', 'phone'],
        where: whereOpts
      },
      {
        model: Category,
        attributes: ['name', 'code', 'id']
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
