
// http请求返回的最外层对象
module.exports = class ResultVo {
  constructor (opts) {
    this.code = opts.code // 错误码
    this.msg = opts.msg // 提示信息
    this.data = opts.data // 具体内容
  }
}
