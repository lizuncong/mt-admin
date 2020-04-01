const express = require('express')
const router = express.Router()
const { login, getUserInfo } = require('../controller/user')

router.post('/login', login)
router.post('/info', getUserInfo)
module.exports = router
