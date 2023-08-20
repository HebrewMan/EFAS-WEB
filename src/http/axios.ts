// 在http.js中引入axios
import axios from 'axios';
import { getCookie } from '@/enum';
const servive = axios.create({
    baseURL: '',
    timeout: 2000,
});
servive.interceptors.request.use(function (config) {
    config.headers['Content-Type'] = 'application/json';
    const token = getCookie('token');
    console.log('current token is :', `Bearer ${token}`)
    // config.headers['Access-Token'] = token;
    config.headers['Authorization'] = `Bearer ${token}`;
    return config;
}), function (err: any) {
    return Promise.reject(err)
}
servive.interceptors.response.use(function (res) {
    // console.log(res)
    return res;
}), function (err: any) {
    return Promise.reject(err)
}
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url: string, params: any) {
    return new Promise((resolve, reject) => {
        servive.get(url, {
            params: params
        }).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err)
        })
    });
};

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url: string, params: any) {
    return new Promise((resolve, reject) => {
        servive.post(url, params)
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err)
            })
    });
};
export default servive;
