import { createSlice } from "@reduxjs/toolkit";
import { login } from "../services/authService";

export const authSilce = createSlice({
    name: "auth",
    initialState: {
        loading: false,
        data: null,
        error: null
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(login.fulfilled, (state, action) => {
            console.log("payload", action);
            state.data = action.payload.data;
        });
        builder.addCase(login.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error

        })
    }
});
export default authSilce.reducer;