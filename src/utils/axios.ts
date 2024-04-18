import Axios from 'axios'

const baseURL = 'https://api.github.com'

const axios = Axios.create({
  timeout: 30 * 1000, // 请求超时 30 秒
  baseURL
})

// 前置拦截器（发起请求之前的拦截）
axios.interceptors.request.use(
  (requestConfig) => {
    return requestConfig
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 后置拦截器（获取到响应时的拦截）
axios.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return response.data
    } else {
      return Promise.reject(response.data)
    }
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default axios
