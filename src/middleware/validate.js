import resultVoUtil from '../utils/resultVoUtil'
import resultEnum from '../enums/resultEnum'

const generateValidator = (validateFn) => {
  return async (req, res, next) => {
    const errors = validateFn(req.body)
    if (errors) {
      // 验证失败
      const err = errors[0]
      console.log('form表单格式验证。。', err)
      res.json(resultVoUtil.error(
        resultEnum.JSON_SCHEMA_ERROR.code,
        resultEnum.JSON_SCHEMA_ERROR.msg,
        err
      ))
    } else {
      await next()
    }
  }
}

export default generateValidator
