import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginAction = createAsyncThunk(
    'authSignin',
    async (payload, thunkAPI) => {
        const res = await fetch("http://localhost:3001/api/v1/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });
        const data = await res.json()

        if (res.ok) {
            return data.body     
        } else {
            return thunkAPI.rejectWithValue(data)
        }
    }
)