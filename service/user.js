const { querySql, queryOne } = require('../database')

const getAdminUserList = () => {
  const sql = 'select * from admin_user'
  return querySql(sql)
}

const findUser = (username) => {
  const sql = `select id, avatar, nickname, role, username from admin_user where username='${username}'`
  return queryOne(sql)
}

module.exports = {
  getAdminUserList,
  findUser
}
