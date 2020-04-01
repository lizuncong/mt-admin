const ResultVo = require('../vo/result');

exports.success = (data, msg) => {
  return new ResultVo({
    code: 0,
    msg: msg || 'success',
    data,
  })
}


exports.error = (code, msg, data) => {
  return new ResultVo({
    code,
    msg,
    data
  })
}
