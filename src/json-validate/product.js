/*
* product数据格式规则
* */

const schema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      // pattern: '^[a-zA-Z][a-zA-Z0-9_]+$',
      maxLength: 255,
      minLength: 2
    },
    price: {
      type: 'string'
    },
    description: {
      type: 'string',
      maxLength: 255,
      minLength: 5
    }
  }
  // required: ['name', 'price', 'description']
}

export default schema
