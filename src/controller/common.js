import resultVoUtil from '../utils/resultVoUtil'

export const uploadFiles = async (req, res, next) => {
  const urls = {}
  req.files && req.files.forEach(file => {
    const { fieldname, filename } = file
    const fileUrl = '/' + filename
    if (!urls[fieldname]) {
      urls[fieldname] = fileUrl
      return
    }
    if (typeof urls[fieldname] === 'string') {
      urls[fieldname] = [urls[fieldname]]
      urls[fieldname].push(fileUrl)
      return
    }
    urls[fieldname].push(fileUrl)
  })
  res.json(resultVoUtil.success(urls))
}
