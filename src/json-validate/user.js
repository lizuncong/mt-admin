/*
* user数据格式规则
* */

const schema = {
  type: 'object',
  properties: {
    userName: {
      type: 'string',
      // pattern: '^[a-zA-Z][a-zA-Z0-9_]+$',
      maxLength: 255,
      minLength: 2
    },
    password: {
      type: 'string',
      maxLength: 255,
      minLength: 6
    },
    phone: {
      type: 'string',
      maxLength: 20,
      minLength: 5
    },
    gender: {
      type: 'number',
      minimum: 1,
      maximum: 3
    },
    avatar: {
      type: 'string',
      maxLength: 255
    }
  },
  required: ['userName', 'password', 'phone', 'gender']

}

export default schema
