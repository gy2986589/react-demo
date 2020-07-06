//引入axios
import axios from 'axios'
//引入接口文件
import api from './api'


const ajax = axios.create({
    baseURL : api.baseUrl
})



export const getdata = () =>{
    return ajax.get(api.getdata);
}