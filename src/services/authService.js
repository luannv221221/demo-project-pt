import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL_AUTH } from "../api";


export const login = createAsyncThunk("auth/login", async ({ userName, password }) => {
    const response = await BASE_URL_AUTH["post"]("/login", { userName, password });
    console.log("ressponse login", response);
    // luu lai token 
    localStorage.setItem("token", response.data.token);
    return response;
})