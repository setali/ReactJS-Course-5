import axios from 'axios'
import { BASE_URL } from './constants'
import { getToken } from './utils'

const request = axios.create({
  baseURL: BASE_URL
})

request.interceptors.request.use(
  function (config) {
    config.headers.Authorization = getToken()
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

export default request
