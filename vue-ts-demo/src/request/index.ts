import axios from "axios"
//创建axios实例
const service = axios.create({
    baseURL: "http://127.0.0.1:29013",
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
})

export default service;