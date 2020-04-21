import xss from 'xss'
import { createProduct } from '../service/product'
import resultVoUtil from '../utils/resultVoUtil'
import resultEnum from '../enums/resultEnum'

export const create = async (req, res, next) => {
  const { name, price, image, description } = req.body
  const { id: userId } = req.session.userInfo

  try {
    const product = await createProduct({
      name,
      price,
      image,
      description: xss(description),
      userId
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
