import xss from 'xss'
import { createProduct, findAllProducts, destroy } from '../service/product'
import { getProductCacheList } from '../redis/products'
import resultVoUtil from '../utils/resultVoUtil'
import ProductVO from '../vo/product'
import resultEnum from '../enums/resultEnum'

export const create = async (req, res, next) => {
  const { name, price, description, categoryId } = req.body
  const { id: userId } = req.session.userInfo
  const image = req.files ? req.files.map(item => `/${item.filename}`).join(';') : ''
  try {
    const product = await createProduct({
      name,
      price,
      image,
      description: xss(description),
      userId,
      categoryId
    })
    if (product) {
      res.json(resultVoUtil.success(null, '创建成功'))
    } else {
      const { code, msg } = resultEnum.CREATE_PRODUCT_ERROR
      res.json(resultVoUtil.error(code, msg))
    }
  } catch (ex) {
    console.log('创建商品接口异常', ex.message, ex.stack)
    const { code, msg } = resultEnum.CREATE_PRODUCT_ERROR
    res.json(resultVoUtil.error(code, msg))
  }
}

// 删除商品
export const deleteProduct = async (req, res, next) => {
  const { productId } = req.body
  const result = await destroy({ productId })
  res.json(resultVoUtil.success(null, '删除成功！'))
}

// 分页获取商品列表
export const getProductList = async (req, res, next) => {
  const { pageNo, pageSize, userId } = req.body
  const result = await findAllProducts({ pageNo, pageSize, userId })
  result.rows = result.rows ? result.rows.map(row => new ProductVO(row)) : []
  res.json(resultVoUtil.success(result))
}

// 利用redis缓存存储高频访问数据的demo
export const getProductListFromRedis = async (req, res, next) => {
  const { pageNo, pageSize } = req.body
  const result = await getProductCacheList(pageNo, pageSize)
  res.json(resultVoUtil.success(result))
}
