import { message } from 'antd'
import request from '../../tools/request'
import { setToken, getToken, removeToken } from '../../tools/utils'

function user (payload) {
  return { type: 'USER', payload }
}

function isLoggedIn (payload) {
  return { type: 'IS_LOGGED_IN', payload }
}

function logon (data, saveToken = true) {
  return dispatch => {
    dispatch(user(data))

    if (data.id) {
      dispatch(isLoggedIn(true))
      saveToken && setToken(data.email)
    } else {
      dispatch(isLoggedIn(false))
    }
  }
}

export function login (data) {
  return dispatch => {
    console.log(data)
    request
      .get('/users/1')
      //   .post('/api/user/1', data)
      .then(response => dispatch(logon(response.data)))
      .catch(err => message.error('نام کاربری یا رمز عبور نادرست است.'))
  }
}

export function getUser () {
  return dispatch => {
    if (getToken()) {
      request('/users/2').then(response =>
        dispatch(logon(response.data, false))
      )
    }
  }
}

export function logout () {
  return dispatch => {
    removeToken()
    dispatch(logon({}, false))
  }
}
