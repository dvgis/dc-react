/**
 * @Author: Caven
 * @Date: 2021-07-01 20:10:00
 */

import axios from 'axios'

const instance = axios.create({
  timeout: 15000,
})

class HttpLoader {
  load() {
    global.Http = instance
    Object.freeze(global.Http)
    initInterceptors(instance)
  }
}

function initInterceptors(instance) {
  instance.interceptors.request.use(
    (config) => {
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  instance.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      return Promise.reject(error)
    }
  )
}

export default HttpLoader
