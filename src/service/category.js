import { Category, User } from '../sequelize/models'

export const createCategory = async ({ name, code, userId }) => {
  return await Category.create({
    name, code, userId
  })
}

export const findAllCategory = async ({ pageNo, pageSize, userId }) => {
  const whereOpts = {}
  if (userId) {
    whereOpts.id = userId
  }

  return await Category.findAndCountAll({
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

export const update = async ({ newName, newCode, categoryId }) => {
  const updateData = {}
  if (newName !== undefined) {
    updateData.name = newName
  }
  if (newCode !== undefined) {
    updateData.code = newCode
  }
  const whereOpts = { id: categoryId }
  return await Category.update(updateData, { where: whereOpts })
}
