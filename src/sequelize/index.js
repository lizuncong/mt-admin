import Sequelize from 'sequelize'
import config from '../config/index'

const { mysql } = config

const conf = {
  host: mysql.host,
  dialect: mysql.dialect
}

// 线上环境采用连接池的方式
// conf.pool = {
//   max: mysql.maxPool, // 连接池中最大的连接数量
//   min: mysql.minPool, // 连接池中最小的连接数量
//   idle: mysql.idle, // 如果一个连接池10秒之内没有被使用，则释放
// }

const seq = new Sequelize(mysql.database, mysql.user, mysql.password, conf)

export default seq
