import redis from 'redis'
import config from '../config/index.js'

const redisClient = redis.createClient(config.redis.port, config.redis.host)

redisClient.on('error', function (error) {
  console.error(error)
})

export default redisClient
