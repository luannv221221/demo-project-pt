import { BASE_URL_ADMIN } from "../api"

export const getCategoryAPI = async () => {
    const response = await BASE_URL_ADMIN["get"]('/category');
    console.log(response);
    return response;
}