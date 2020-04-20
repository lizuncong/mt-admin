import { User } from '../sequelize/models'

export const getUserInfo = async (phone, password) => {
  const whereOpt = {
    phone: phone || ''
  }
  if (password) {
    whereOpt.password = password
  }

  const user = await User.findOne({
    attributes: ['id', 'userName', 'phone', 'gender', 'avatar'],
    where: whereOpt
  })
  return user
}
