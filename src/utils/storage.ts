import Cookie from 'cookie-universal'

const cookies = Cookie()
// const cookiesOpts = { maxAge: 60 * 60 * 24 * (config.loginTimeout || 7), path: '/' } // 默认设置

export function getCookieData(
  key: string,
  opts: { fromRes: boolean; parseJSON: boolean }
) {
  let value: any = ''
  try {
    if (key) {
      value = opts ? cookies.get(key, opts) : cookies.get(key)
    } else {
      value = cookies.getAll()
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)
  }
  return value
}

export function clearCookieData(key: string) {
  try {
    if (key) {
      cookies.remove(key)
    } else {
      // 如果没传key，则清空所有
      cookies.removeAll()
    }
  } catch (error) {
    return false
  }
  return true
}

export function clearLocalData(key: string) {
  if (key === undefined) {
    try {
      window.localStorage.clear()
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('no support localstorage.clear')
    }
  } else {
    try {
      window.localStorage.removeItem(key)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('no support localstorage.removeItem')
    }
  }
}
