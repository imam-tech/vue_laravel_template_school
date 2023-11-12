import Vue from 'vue'
import axios from 'axios'
import Cookies from 'js-cookie'


// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.post['Content-Type'] = 'application/json';


const config = {
  baseURL: process.env.MIX_APP_API_HOST || process.env.MIX_APP_API_HOST || 'http://localhost:8000',
  timeout: 60 * 1000 // Timeout
}

const _axios = axios.create(config)

_axios.interceptors.request.use(
  function (config) {
    const accessToken = Cookies.get('access_token')
    if(accessToken){
      config.headers['Authorization'] = `Bearer ${ accessToken }`;
    }

    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
_axios.interceptors.response.use(
  function (response) {
    // Do something with response data
    response = typeof response.data !== undefined ? response.data : response
    return response
  },
  
  function (error) {
    if (error.response.status===404) {
      // return window.location.href = '/error/error-404'
    }
    else if(error.response.status===401){
    //  return window.location.href = '/error/error-401'
    }
    return Promise.reject(error)
  }
)

export const __axios__ = _axios

Plugin.install = function (Vue, options) {
  Vue.axios = _axios
  window.axios = _axios
  Object.defineProperties(Vue.prototype, {
    axios: {
      get () {
        return _axios
      }
    },
    $axios: {
      get () {
        return _axios
      }
    }
  })
}

Vue.use(Plugin)

export default Plugin