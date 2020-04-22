import redis from 'redis'
import config from '../config/index.js'

const redisClient = redis.createClient(config.redis.port, config.redis.host)

redisClient.on('error', function (error) {
  console.error('redis异常....', error)
})

// timeout单位为秒
const set = (key, val, timeout = 60 * 60) => {
  if (typeof val === 'object') {
    val = JSON.stringify(val)
  }
  redisClient.set(key, val)
  redisClient.expire(key, timeout)
}

const get = (key) => {
  return new Promise((resolve, reject) => {
    redisClient.get(key, (err, val) => {
      if (err) {
        reject(err)
        return
      }
      if (val == null) {
        resolve(null)
        return
      }

      try {
        resolve(
          JSON.parse(val)
        )
      } catch (ex) {
        resolve(val)
      }
    })
  })
}

export { set, get }
export default redisClient
