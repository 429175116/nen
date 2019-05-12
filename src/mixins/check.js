import wepy from 'wepy'
function trim (str) { 
  return str.replace(/^(\s|\u00A0)+/,'').replace(/(\s|\u00A0)+$/,'')
}
export default class testMixin extends wepy.mixin {
  data = {
    mixin: 'This is mixin data.'
  }
  methods = {
    tap () {
      this.mixin = 'mixin data was changed'
      console.log('mixin method tap')
    }
  }

  onShow() {
    console.log('mixin onShow')
  }

  onLoad() {
    console.log('mixin onLoad')
  }

  showToast () {
    wepy.showToast({
      title: '拼命加载中...',
      icon: 'loading',
      duration: 3000
    })
  }

  trim (str) {
    return str.replace(/^(\s|\u00A0)+/,'').replace(/(\s|\u00A0)+$/,'')
  }
  // 数据格式校验
  check = {
    // 是否为空
    // isInt(str) {
    //   var a = /(^[1-9]\d*$)/, s = trim(str)
    //   if (a.test(s))return false
    //   else return true
    // },
    // 是否为空
    isNull(str) {
      if (trim(str).length == 0)return true
      else return false
    },
    // 是否为邮件
    isEmail(str) {
      var reg = /^\w+((-w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/
      if (reg.test(trim(str)))return false
      else return true
    },
    // 是否为手机号
    isPhone(str) {
      var a = /^1\d{10}$/, s = trim(str)
      if (a.test(s))return false
      else return true
    },
    // 是否汉字
    isCN(str) {
      var s = trim(str), reg = /^[\u4e00-\u9fa5]+$/
      if (reg.test(s))return false
      else return true
    },
    // 是否密码
    isPwd(str) {
      var reg = /^[A-Za-z0-9_-]+$/
      if (reg.test(trim(str)))return false
      else return true
    },
    // 是否为微信号
    isWx(str) {
      var rex = /^[a-zA-Z\d_]{5,}$/
      if (rex.test(trim(str)))return false
      else return true
    },
    // 是否全为数字
    isNum(num) {
      var rex = /^[0-9]+$/
      if (rex.test(trim(num)))return false
      else return true
    },
    // 是否全为热线电话
    isHotline(num) {
      var rex = /^[0-9]([0-9]|-)*[0-9]$/
      if (rex.test(trim(num)))return false
      else return true
    },
    
    // 是否为钱数
    isMoney(money) {
      var reg = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;
      if (reg.test(money)) {
        // alert("正确~");
        return false
      }else{
        // alert("有误~");
        return true
      }
    },
    // 是否为15位身份证号
    isIdentity_15(str) {
      var rex = /^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$/
      if (rex.test(trim(str)))return true
      else return false
    },
    // 是否为18位身份证号
    isIdentity_18(str) {
      var rex = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
      if (rex.test(trim(str)))return true
      else return false
    },
    // 判断是否为url地址
    isUrl(str) {
      var rex = /^(http|https){1}:\/\/[^\s]+$/
      if (rex.test(trim(str)))return false
      else return true
    }
  }
}