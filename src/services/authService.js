import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL_AUTH } from "../api";
import Cookies from "js-cookie";

export const login = createAsyncThunk("auth/login", async ({ userName, password }) => {
    const response = await BASE_URL_AUTH["post"]("/login", { userName, password });
    console.log("ressponse login", response);
    // luu lai token 
    Cookies.set("token", response.data.token, { expires: 7 });
    // lưu username 
    Cookies.set("username", response.data.userName, { expires: 7 });
    // luu role 
    Cookies.set("role", JSON.stringify(response.data.roles), { expires: 7 });

    return response;
})