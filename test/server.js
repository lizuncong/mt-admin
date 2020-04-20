const request = require('supertest')
const server = require('../dist/server')

module.exports = request(server)
