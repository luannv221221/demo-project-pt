import { BASE_URL_ADMIN } from "../api"

export const postProductAPI = async (data) => {
    const response = await BASE_URL_ADMIN["post"]('/product', data);
    console.log(response);
    return response;
}