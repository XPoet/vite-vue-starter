import Axios from 'axios'

const baseURL = 'https://api.github.com'

const axios = Axios.create({
    baseURL,
    timeout: 10000 // 请求超时 10s
})

// 前置拦截器（发起请求之前的拦截）
axios.interceptors.request.use(
    (config) => {
        /**
         * 此处根据你的项目实际情况来对 config 做处理
         * 本例只是 demo，对 config 不做任何处理，直接返回
         */
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

// 后置拦截器（获取到响应时的拦截）
axios.interceptors.response.use(
    (response) => {
        /**
         * 此处根据你的项目实际情况来对 response 和 error 做处理
         * 本例只是 demo，对 response 和 error 不做任何处理，直接返回
         */
        return response
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default axios
