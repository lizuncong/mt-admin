import resultVoUtil from '../utils/resultVoUtil'
import resultEnum from '../enums/resultEnum'

const generateValidator = (validateFn) => {
  return async (req, res, next) => {
    console.log('validate...', req.body)
    const errors = validateFn(req.body)
    if (errors) {
      // 验证失败
      const err = errors[0]
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
