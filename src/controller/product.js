const { check, validationResult } = require('express-validator')

const upload = async (req, res, next) => {
  res.json({ code: 0 })
}

module.exports = {
  upload
}
