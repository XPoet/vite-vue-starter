import axios from '../utils/axios'

export default class {
  static getXPoet(params: any) {
    return axios({
      url: `users/${params.name}`,
      method: 'get',
      data: params
    })
  }
}
