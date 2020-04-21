import Ajv from 'ajv'
import userSchema from './user'
import productSchema from './product'
/*
* JSON schema 校验
* */

const ajv = new Ajv({
  // allErrors: true
})

const validate = (schema, data = {}) => {
  const valid = ajv.validate(schema, data)
  if (!valid) {
    return ajv.errors
  }
}

export default {
  userValidate (data) {
    return validate(userSchema, data)
  },
  productValidate (data) {
    return validate(productSchema, data)
  }
}
