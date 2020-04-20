
// http请求返回的最外层对象
export default class ResultVo {
  constructor (opts) {
    this.code = opts.code // 错误码
    if (opts.msg) {
      this.msg = opts.msg
    }
    if (opts.data) {
      this.data = opts.data // 具体内容
    }
  }
}
