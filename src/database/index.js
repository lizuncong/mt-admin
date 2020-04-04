const mysql = require('mysql')
const config = require('./config')

function connect() {
  return mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database
  })
}


function querySql (sql) {
  const con = connect()
  return new Promise((resolve, reject) => {
    try {
      con.query(sql, function (err, results) {
        if(err) {
          reject(err)
          return
        }
        resolve(results)
      })
    }catch (e) {
      reject(e)
    } finally {
      con.end()
    }
  })
}

function queryOne(sql){
  return new Promise((resolve, reject) => {
    querySql(sql).then(results => {
      if(results && results.length > 0){
        resolve(results[0])
      } else {
        resolve(null)
      }
    }).catch(err => {
      reject(err)
    })
  })
}

module.exports = {
  querySql,
  queryOne
}
