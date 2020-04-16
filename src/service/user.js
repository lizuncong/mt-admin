import { querySql, queryOne } from '../database'
export const getAdminUserList = () => {
  const sql = 'select * from admin_user'
  return querySql(sql)
}

export const findUser = (username) => {
  const sql = `select id, avatar, nickname, role, username from admin_user where username='${username}'`
  return queryOne(sql)
}
