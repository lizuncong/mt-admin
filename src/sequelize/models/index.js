const seq = require('../index')
const User = require('./user')

seq.authenticate().then(() => {
  console.log('ok')
}).catch(e => {
  console.log('error...', e)
})

seq.sync().then(() => {
  console.log('sync ok..')
  process.exit()
})
