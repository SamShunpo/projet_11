import { createSlice } from "@reduxjs/toolkit";
import { loginAction } from "../actions/auth.actions";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        loading: false,
        token: null,
        errorMessage: null,
    },
    reducers: {
        logout(state) {
            state.token = null;
        }
    },

    extraReducers: (builder) => {
        builder.addCase(loginAction.pending, (state) => {
            state.loading = true;
            state.errorMessage = null;
        });
        builder.addCase(loginAction.fulfilled, (state, action) => {
            state.loading = false;
            state.token = action.payload.token;
        });
        builder.addCase(loginAction.rejected, (state, action) => {
            state.loading = false;
            state.errorMessage = action.payload.message;
        });
    }

});

export const { logout } = authSlice.actions;
export default authSlice.reducer;