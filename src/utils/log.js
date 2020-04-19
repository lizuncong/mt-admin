import fs from 'fs'
import path from 'path'
import { dateFormat } from './tools'

export const log = (content) => {
  const currentDate = new Date()
  const year = currentDate.getFullYear()
  const month = String(currentDate.getMonth() + 1).padStart(2, '0')
  const dir = path.join(__dirname, '../', 'log', `/${year}-${month}`)
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }

  const fileName = dir + `/${dateFormat(currentDate)}.log`
  const writeStream = fs.createWriteStream(fileName, {
    flags: 'a'
  })
  writeStream.write(content + '\n', 'UTF8')
  writeStream.end()
}

const pad = num => (num > 9 ? '' : '0') + num

export const generateLogFileName = (time, index) => {
  if (!time) return 'access.log'

  const month = time.getFullYear() + '' + pad(time.getMonth() + 1)
  const day = pad(time.getDate())
  const hour = pad(time.getHours())
  const minute = pad(time.getMinutes())
  const seconds = pad(time.getSeconds())
  return `${month}/${month}${day}-${hour}${minute}-${seconds}.log`
}
