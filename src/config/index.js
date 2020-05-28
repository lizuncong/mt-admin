export default {
  mysql: {
    host: 'localhost',
    user: 'root',
    password: 'root123456',
    database: 'mt_admin',
    dialect: 'mysql',
    maxPool: 5, // 连接池最大连接数量
    minPool: 0, // 连接池中最小的连接数量
    idle: 10000 // 如果一个连接池10秒之内没有被使用，则释放
  },
  redis: {
    host: '127.0.0.1',
    port: 6379
  },
  CRYPTO_SECRET_KEY: 'AD*_*FD*_*VFDdsrre', // 密码加密密钥
  SESSION_SECRET: 'session_secret_123456', // session密钥
  COOKIE_MAX_AGE: 10 * 60 * 1000, // 1小时过期
  HOST: 'http://localhost:5000/api/'
}
