// 在http.js中引入axios
import axios from 'axios';
import { getCookie } from '@/enum';
const servive = axios.create({
    baseURL: '',
    timeout: 5000,
});
servive.interceptors.request.use(function (config) {
    config.headers['Content-Type'] = 'application/json';
    const token = getCookie('token');
    const rtoken = getCookie('rtoken');
    console.log(config)

    config.headers['Authorization'] = `Bearer ${token}`;
    config.headers["X-Authorization"] = `Bearer ${rtoken}`;
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
export function get(url: string, params?: any) {
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
