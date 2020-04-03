import axios from 'axios'
import {
    message
} from 'ant-design-vue'

const service = axios.create({
    baseURL: 'http://192.168.10.242:8080',
    withCredentials: false,
    timeout: 10000
})

service.interceptors.request.use(
    config => config,
    error => {
        Promise.reject(error)
    }
)

service.interceptors.response.use(
    response => response,
    error => {
        // console.log(message)
        message.error(error.message);
        // Message({
        //   showClose: true,
        //   message: error.message,
        //   type: 'error',
        //   duration: 5 * 1000
        // })
        return Promise.reject(error)
    }
)

export default service