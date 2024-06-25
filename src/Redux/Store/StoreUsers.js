import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getUsersFromServer = createAsyncThunk("users/getUsersFromServer",
    async (url) => {
        console.log("url: ", url);

        return fetch(url)
            .then((res) => res.json())
            .then((data) => data)
    }
)


const slice = createSlice({
    name: "users",
    initialState: [],
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(getUsersFromServer.fulfilled, (state, action) => {
            return action.payload

        })
    }
})

export default slice.reducer  