import { get, set } from './index'
import { findAllProducts } from '../service/product'

const PREFIX = 'product:'

// 从redis缓存中获取产品列表
// 如果redis缓存中没有相关数据，则从数据库中读取，
// 并存到redis中，同时返回给前端
const getProductCacheList = async (pageNo, pageSize) => {
  const key = `${PREFIX}_${pageNo}_${pageSize}`
  const cacheResult = await get(key)
  // 缓存中有数据
  if (cacheResult) return cacheResult

  // 没有缓存，读取数据库
  const dbResult = await findAllProducts({ pageSize, pageNo })

  // 将读取的数据存入redis中，5分钟有效
  set(key, dbResult, 5 * 60)

  return dbResult
}

export {
  getProductCacheList
}
