import { User } from '../sequelize/models'

export const getUserInfo = async (phone, password) => {
  const whereOpt = {
    phone: phone || ''
  }
  if (password) {
    whereOpt.password = password
  }

  return await User.findOne({
    attributes: ['id', 'userName', 'phone', 'gender', 'avatar'],
    where: whereOpt
  })
}

/*
* 创建用户
* @param {string} userName 用户名
* @param {string} password 用户名
* @param {string} userName 用户名
* @param {string} userName 用户名
* */
export const createUser = async ({ userName, password, phone, gender, avatar }) => {
  return await User.create({
    userName,
    password,
    phone,
    gender,
    avatar
  })
}

/*
* 修改用户信息
* @param {Object} param0 修改的内容 { newUserName, newPassword, newGender, newAvatar }
* @param {string} param1 查询条件 { phone, password }
* */
export const updateUser = async ({ newUserName, newPassword, newGender, newAvatar }, { phone, password }) => {
  const updateData = {}
  if (newUserName !== undefined) {
    updateData.userName = newUserName
  }
  if (newPassword !== undefined) {
    updateData.password = newPassword
  }
  if (newGender !== undefined) {
    updateData.gender = newGender
  }
  if (newAvatar !== undefined) {
    updateData.avatar = newAvatar
  }
  const whereOpts = { phone }
  if (password) {
    whereOpts.password = password
  }

  return await User.update(updateData, { where: whereOpts })
}
