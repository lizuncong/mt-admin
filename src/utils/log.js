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
