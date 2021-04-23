import axios, { AxiosRequestConfig } from 'axios'
import Cookie from 'cookie-universal'
import axiosReturnTypes from '../common/types/axiosType'
import { clearCookieData, clearLocalData } from './storage'
import config from './config'
import router from '../router/index'

const // 获取cookie
  cookies = Cookie()

// 请求参数处理
function formatOption(option: AxiosRequestConfig): AxiosRequestConfig {
  const options: AxiosRequestConfig = option
  // url处理
  if (typeof options.url === 'undefined') {
    throw new Error('API:request missing parameter <url>')
  } else {
    // 拼接host域名
    options.url = config.apiAppName(options.url)

    // 如果是get请求，把data中的数据，qs后连接到url后面
    if (options.method === 'get' || options.method === 'delete') {
      if (!(options.data || option.data == null || option.data === undefined)) {
        options.params = options.data
      }
    }

    // timeout处理
    if (typeof options.timeout === 'undefined') {
      options.timeout = config.reqTimeout || 15000
    }

    // header处理
    options.headers = options.headers || {}
    options.headers = {
      // 'token': cookies && cookies.get(config.authName) || '',
      ...(cookies && cookies.get(config.authName)
        ? { token: cookies.get(config.authName) }
        : {}),
      'Content-Type': 'application/json;charset=utf-8',
      ...config.headers,
      ...options.headers
    }
    return options
  }
}

// 处理登录失效
function handleLoginInvalid() {
  // 登录失效 清除cookie里的token与localStorage里用户信息
  clearCookieData(config.authName)
  clearLocalData(config.authInfo)
  const url = `${config.loginInvalidRedirectUrl}`
  router.push(url)
}

// 处理返回的结果
export function handleResponse(response: any) {
  const { data, status, statusText } = response
  const { code } = data

  // 根据自己项目的状态码
  if (status === 401 || code === 401 || code === 403) {
    // 登录失效处理
    handleLoginInvalid()
  }

  return {
    code: 0,
    msg: statusText,
    status,
    ...(data.data !== undefined || data.code !== undefined || data.msg !== undefined
      ? data
      : { data })
  }
}

// 请求方法封装成Promise
function request(options: AxiosRequestConfig): Promise<axiosReturnTypes> {
  return new Promise((resolve) => {
    try {
      axios(options).then((response) => {
        resolve(handleResponse(response))
      })
    } catch (error) {
      resolve({ code: -1, msg: error.message, errorData: error })
    }
  })
}

function init(options: AxiosRequestConfig): Promise<axiosReturnTypes> {
  const params = formatOption(options)

  return request(params)
}

export default init
