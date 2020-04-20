const server = require('./server')

test('json接口返回数据格式正确', async () => {
  const res = await server.get('/')
  expect(res.body).toEqual('home')
  // expect(res.body.title).toBe('test')
})
