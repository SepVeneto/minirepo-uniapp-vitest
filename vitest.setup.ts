import { config } from '@vue/test-utils'

// 模拟 uni-app 全局对象
global.uni = {}
globalThis.wx = {
  getSystemInfoSync() {},
  canIUse() {},
}


// 配置 Vue Test Utils
config.global.stubs = {
  // 禁用所有组件的默认存根
}

config.global.mocks = {
  $t: (key: string) => key, // 模拟 i18n 的 $t 函数
}
