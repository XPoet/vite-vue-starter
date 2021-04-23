export interface cookSetType {
  path?: string
  expires?: any // 传入日期类型
  maxAge?: number
  httpOnly?: boolean
  domain?: string
  encode?: any // 传入回调函数
  sameSite?: boolean | string
  secure?: boolean
}
