import Axios from 'axios'

const baseURL = 'https://api.github.com'

const axios = Axios.create({
  baseURL,
  timeout: 20000 // 请求超时 20s
})

// 前置拦截器（发起请求之前的拦截）
axios.interceptors.request.use(
  (requestConfig) => {
    /**
     * 此处根据项目实际情况来对 requestConfig（请求配置） 做相应处理
     * 例如：给请求头加上 token 等等
     * 这里对 requestConfig 不做任何处理
     */
    return requestConfig
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 后置拦截器（获取到响应时的拦截）
axios.interceptors.response.use(
  (response) => {
    /**
     * 此处根据项目实际情况来对 response 做处理
     * 这里对 response 只做简单封装处理
     */
    return {
      statusCode: response.status,
      data: response.data,
      message: response.statusText
    }
  },
  (error) => {
    if (error.response && error.response.data) {
      const code = error.response.status
      const msg = error.response.data.message
      console.error(`[Axios Error]`, error.response)
      ElMessage.error(`Code: ${code}, Message: ${msg}`)
    } else {
      ElMessage.error(`${error}`)
    }
    return Promise.reject(error)
  }
)

export default axios
