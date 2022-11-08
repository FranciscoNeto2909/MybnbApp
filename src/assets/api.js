import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:3001/"
})

const token = localStorage.getItem('token')

api.interceptors.request.use(async (config) => {
    try {
        if (token != null || token != undefined) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
        
    } catch (error) {
        console.log(error)
    }
}, error => console.log(error))

axios.interceptors.response.use(config => {
    try {
        if (token != null || token != undefined) {
            axios.defaults.headers.common["Authorization"] = token
        }
        return config

    } catch (error) {
        console.log(error)
    }
}, error => console.log(error))