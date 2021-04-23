import { MockMethod } from 'vite-plugin-mock'

const mockArr = [
  {
    url: '/api/get',
    method: 'get',
    response: (res: { query: any }) => {
      return {
        code: 0,
        data: {
          name: res.query
        }
      }
    }
  },
  {
    url: '/api/post',
    method: 'post',
    timeout: 2000,
    response: {
      code: 0,
      data: {
        name: 'vben'
      }
    }
  },
  {
    url: '/api/test',
    method: 'get',
    response: (res: { body: any }) => {
      console.log('mock funciton: /api/test/ ----', res)
      return {
        code: 0,
        message: 'ok',
        data: {
          name: 'Mock'
        }
      }
    }
  }
]

export default mockArr as MockMethod[]
