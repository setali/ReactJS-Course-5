import cookie from 'js-cookie'
import { TOKEN_NAME, TOKEN_LIFE } from './constants'

export function getToken () {
  return cookie.get(TOKEN_NAME)
}

export function setToken (token) {
  cookie.set(TOKEN_NAME, token, { expires: TOKEN_LIFE })
}

export function removeToken () {
  cookie.remove(TOKEN_NAME)
}
