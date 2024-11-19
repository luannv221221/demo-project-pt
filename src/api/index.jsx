import axios from "axios";

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