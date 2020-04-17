import redis from 'redis'
import config from '../config/index.js'

const redisClient = redis.createClient(config.redis.port, config.redis.host)

redisClient.on('error', function (error) {
  console.error(error)
})

const set = (key, val) => {
  if (typeof val === 'object') {
    val = JSON.stringify(val)
  }

  redisClient.set(key, val, redis.print)
}

const get = (key) => {
  return new Promise((resolve, reject) => {
    redisClient.get(key, (err, val) => {
      if (err) {
        reject(err)
        return
      }
      if (val === null) {
        resolve(null)
        return
      }
      try {
        resolve(JSON.parse(val))
      } catch (e) {
        resolve(val)
      }
    })
  })
}

export default {
  set,
  get
}
