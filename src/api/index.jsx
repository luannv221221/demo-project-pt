import axios from "axios";
import Cookies from "js-cookie";
export const BASE_URL = axios.create({
    baseURL: "http://localhost:8080/api/v1",
    headers: {
        "Content-Type": "application/json",
    }
});

export const BASE_URL_ADMIN = axios.create({
    baseURL: "http://localhost:8080/api/v1/admin",
    headers: {
        "Content-Type": "application/json",
    }
});
export const BASE_URL_AUTH = axios.create({
    baseURL: "http://localhost:8080/api/v1/auth",
    headers: {
        "Content-Type": "application/json",
    }
});

// lấy về token 
const token = Cookies.get("token");
const addAuthToken = (instance) => {
    instance.interceptors.request.use((config) => {

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
            console.log(config.headers.Authorization = `Bearer ${token}`);
        }
        return config;
    })
}

// muốn ap dụng con instanace nào thì làm như sau :
addAuthToken(BASE_URL_ADMIN);