import xss from 'xss'
import { createCategory, findAllCategory } from '../service/category'
import resultVoUtil from '../utils/resultVoUtil'
import resultEnum from '../enums/resultEnum'

export const create = async (req, res, next) => {
  const { name, code } = req.body
  const { id: userId } = req.session.userInfo

  try {
    const category = await createCategory({
      name,
      code,
      userId
    })
    if (category) {
      res.json(resultVoUtil.success(null, '创建成功'))
    } else {
      const { code, msg } = resultEnum.CREATE_CATEGORY_ERROR
      res.json(resultVoUtil.error(code, msg))
    }
  } catch (ex) {
    console.log('创建商品分类接口异常', ex.message, ex.stack)
    const { code, msg } = resultEnum.CREATE_CATEGORY_ERROR
    res.json(resultVoUtil.error(code, msg))
  }
}

// 分页获取商品分类列表
export const getList = async (req, res, next) => {
  const { pageNo, pageSize } = req.body
  const { id: userId } = req.session.userInfo

  const result = await findAllCategory({ pageNo, pageSize, userId })
  res.json(resultVoUtil.success(result))
}
