import { createSlice } from "@reduxjs/toolkit";
import { getUser, updateUser } from "../actions/user.actions";

const userSlice = createSlice({
    name: "user",
    initialState: {
        firstName: null,
        lastName: null,
        userName: null,
        loading: false,
        errorMessage: null,
        isEditing: false,
    },

    reducers: {
        toggleEdit(state) {
            state.isEditing = !state.isEditing;
        }
    },

    extraReducers: (builder) => {
        builder.addCase(getUser.pending, (state) => {
            state.loading = true;
            state.errorMessage = null;
        });
        builder.addCase(getUser.fulfilled, (state, action) => {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.userName = action.payload.userName;
            state.loading = false;
        });
        builder.addCase(getUser.rejected, (state, action) => {
            state.loading = false;
            state.errorMessage = action.payload.message;
        });
        builder.addCase(updateUser.pending, (state) => {
            state.loading = true;
            state.errorMessage = null;
        });
        builder.addCase(updateUser.fulfilled, (state, action) => {
            state.userName = action.payload.userName;
            state.loading = false;
            state.isEditing = false;
        });
        builder.addCase(updateUser.rejected, (state, action) => {
            state.loading = false;
            state.errorMessage = action.payload.message;
        });
}

});

export const { toggleEdit } = userSlice.actions;
export default userSlice.reducer;