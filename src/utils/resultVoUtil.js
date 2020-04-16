import ResultVo from '../vo/result'

const success = (data, msg) => {
  return new ResultVo({
    code: 0,
    msg: msg || 'success',
    data
  })
}

const error = (code, msg, data) => {
  return new ResultVo({
    code,
    msg,
    data
  })
}

export default {
  success,
  error
}
