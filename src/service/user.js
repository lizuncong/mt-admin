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
