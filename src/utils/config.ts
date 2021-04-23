// 基础共同的配置
const baseConfig = {
  authName: 'token',
  // 缓存用户信息的字段
  authInfo: 'userInfo',
  // 环境变量
  env: import.meta.env.VITE_PROJECT_ENV,
  // 登录cookie超时，单位天
  loginTimeout: 7,
  // 登录成功，默认跳转的url
  loginSuccessRedirectUrl: '/',
  // token失效，跳转的url
  loginInvalidRedirectUrl: '/',
  // 请求超时时间设置
  reqTimeout: 10000,
  // headers所存放的常量
  headers: {}
}

// 根据不同环境变量，不同的配置
const envConfig = {
  dev: {
    host: 'http://api.github.com/',
    mock: true
  },
  test: {
    host: 'http://api.github.com/',
    mock: false
  },
  prod: {
    host: 'http://www.baidu.com/',
    mock: false
  }
}

// 合并配置
const config = Object.assign(baseConfig, envConfig[baseConfig.env])

const getApiAppName = (url: string) => {
  if (!url) {
    return ''
  }
  if (url.indexOf('http') >= 0) {
    return url
  }

  // 判断传入数据是否用mock
  if (config.mock && (config.env === 'loc' || config.env === 'dev')) {
    return `${url}`
  }

  // 其它环境，则读取真实应用的接口
  return `${config.host}${url}`
}

config.apiAppName = getApiAppName

export default config
