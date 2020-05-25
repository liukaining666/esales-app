const axios = require('axios');
import store from '../store/index'

// create an axios instance
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    // timeout: 5000 // request timeout
  })
/**
 * interceptors
 */
service.interceptors.request.use((config) => {
    store.commit('showLoading')
    return config;
}, (error) => {
    store.commit('hideLoading')
    return Promise.reject(error);
});
service.interceptors.response.use((response) => {
    store.commit('hideLoading')
    return response;
}, (error) => {
    store.commit('hideLoading')
    return Promise.reject(error);
});

const ajax = {
    /**
     * post方法
     * @param url 必选 接口请求地址
     * @param data 可选 接口调用参数
     * @returns {Promise<unknown>}
     * @author 范伟伟 2019年11月2日 10:22:24
     */
  post: (url,data = {}) => {
      if(!url) throw new Error('invalid argument url in this ajax-post function.');
      return new Promise((resolve, reject) => {
        service.post(url,data,{
              headers: {
                  'Content-Type': 'application/json;charset=UTF-8'
              },
          }).then(res => {
              resolve(res.data)
          }).catch(err => {
              reject(err)
          })
      })
  },
    /**
     * get方法
     * @param url 必选 接口请求地址
     * @param data 可选 接口调用参数
     * @returns {Promise<unknown>}
     * @author 范伟伟 2019年11月2日 10:24:19
     */
  get: (url,data ={}) => {
      if(!url) throw new Error('invalid argument url in this ajax-get function.');
      return new Promise((resolve, reject) => {
        service.get(url, {
              params: data
          }).then(function (res) {
              resolve(res.data)
          }).catch(function (err) {
              reject(err)
          })
      })
  }

};
export default ajax;