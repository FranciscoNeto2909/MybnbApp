import axios from "axios";
// server Url https://mybnb-api.onrender.com/
// Localhost Url http://localhost:3001/

export const api = axios.create({https://mybnb-api.onrender.com/
    baseURL: ""
})

api.interceptors.request.use(async (config) => {
    try {
        const token = await localStorage.getItem('token')

        if (token != null && token != undefined) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
        
    } catch (error) {
        console.log("erro dentro do request")
    }
}, error => console.log("erro fora do request"))

axios.interceptors.response.use(config => {
    try {
        if (token != null || token != undefined) {
            axios.defaults.headers.common["Authorization"] = token
        }
        return config

    } catch (error) {
        console.log("erro dentro do response")
    }
}, error => console.log("erro fora do response"))