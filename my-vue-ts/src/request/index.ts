import axios from "axios"
import { ElMessage } from 'element-plus'
//创建axios实例
const service = axios.create({
    baseURL: "http://127.0.0.1:35000",
    timeout: 5000
})

service.interceptors.request.use((config) => {
    config.headers = config.headers || {}
    if (localStorage.getItem("token")) {
        config.headers.token = localStorage.getItem("token") || ""

    }
    return config
})

//响应拦截
service.interceptors.response.use((res) => {
    const code = res.data.code;
    if (code != 200) {
        return Promise.reject(res.data)
    }
    return res.data;
}, err => {
    console.log(err)
    ElMessage.error('接口请求失败')
})

export default service;