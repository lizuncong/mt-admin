import { createCategory, findAllCategory, update, destroy } from '../service/category'
import resultVoUtil from '../utils/resultVoUtil'
import CategoryVo from '../vo/category'
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

export const updateCategory = async (req, res, next) => {
  const { name, code: categoryCode, categoryId } = req.body
  const result = await update({
    newName: name, newCode: categoryCode, categoryId
  })
  if (result && result.length) {
    return res.json(resultVoUtil.success(null, '修改成功'))
  }
  const { code, msg } = resultEnum.EDIT_CATEGORY_INFO_FAIL
  res.json(resultVoUtil.error(code, msg))
}

// 分页获取商品分类列表
export const getList = async (req, res, next) => {
  const { pageNo, pageSize, categoryName } = req.body
  const { id: userId } = req.session.userInfo

  const result = await findAllCategory({ pageNo, pageSize, userId, categoryName })
  result.rows = result.rows ? result.rows.map(item => new CategoryVo(item)) : []
  res.json(resultVoUtil.success(result))
}

export const deleteCategory = async (req, res, next) => {
  const { categoryId } = req.body
  const result = await destroy({ categoryId })
  console.log('result...', result)
  res.json(resultVoUtil.success(null, '删除成功'))
}
