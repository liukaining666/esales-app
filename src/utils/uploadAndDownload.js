const axios = require('axios');
const service = axios.create({
    baseURL: '/', // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    // timeout: 5000 // request timeout
})

service.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});
service.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
});

const ajax_uploadAndDownload = {
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
export default ajax_uploadAndDownload;