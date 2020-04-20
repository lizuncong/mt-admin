/*
* TODO
* 需要优化getGenderStyByCode方法
* 目前是在外面定义了enums变量，如果能将enums变量放在
* UserEnums里面就可以
* */

const enums = []

class UserEnum {
  constructor (code, msg) {
    this.code = code
    this.msg = msg
    enums.push(this)
  }
}

export default {
  GENDER_MAN: new UserEnum('1', '男'),
  GENDER_WOMAN: new UserEnum('2', '女'),
  GENDER_UNKNOWN: new UserEnum('3', '保密'),
  getGenderStrByCode (code) {
    const findItem = enums.find(item => item.code === code)
    return findItem && findItem.msg
  }
}
