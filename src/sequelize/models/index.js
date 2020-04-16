import seq from '../index'
import './user'
import './product'

seq.authenticate().then(() => {
  console.log('ok')
}).catch(e => {
  console.log('error...', e)
})

seq.sync({ alter: true }).then(() => {
  console.log('sync ok..')
  process.exit()
})
