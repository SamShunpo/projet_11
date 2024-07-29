import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUser = createAsyncThunk(
    'userProfile',
    async (payload, thunkAPI) => {
        const res = await fetch("http://localhost:3001/api/v1/user/profile", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${payload.token}`,
            },
        });
        const data = await res.json()

        if (res.ok) {
            return data.body
        } else {
            return thunkAPI.rejectWithValue(data)
        }
    }
)

export const updateUser = createAsyncThunk(
    'updateProfile',
    async (payload, { rejectWithValue }) => {

        try {
            const res = await fetch("http://localhost:3001/api/v1/user/profile", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${payload.token}`,
                },
                body: JSON.stringify({
                    userName:payload.userName,
                })
            });

            if (!res.ok) {
                const error = await res.json();
                return rejectWithValue(error);
            }

            const data = await res.json();
            return data.body;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);