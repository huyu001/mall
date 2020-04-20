import axios from 'axios'
export function request(config) {
    // 创建axios实例
    const request1 = axios.create({
            baseURL: "http://152.136.185.210:8000/api/h8"
        })
        // 请求拦截
    request1.interceptors.request.use(res => {
            // console.log(res)
            return res
        }, rej => {
            console.log('拦截失败')
        })
        // 响应拦截
    request1.interceptors.response.use(res => {
            // console.log(res)
            return res.data
        }, err => {
            console.log(err)
        })
        // 发送真正的网络请求
    return request1(config)
}