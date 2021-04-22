import { MockMethod } from 'vite-plugin-mock'


const mockArr = [
  {
    url: '/api/get',
    method: 'get',
    response: ({ query }) => {
      return {
        code: 0,
        data: {
          name: 'vben'
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
    response: ({ body }) => {
      console.log('mock funciton: /api/test/ ----', body)
      return {
        code: 0,
        message: 'ok',
        data: {
          name:'Mock'
        }
      }
    }
  }
]

export default mockArr as MockMethod[]
