import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getCoursesFromServer = createAsyncThunk("courses/getUsersFromServer",
    async (url) => {
        console.log("url: ", url);

        return fetch(url)
            .then((res) => res.json())
            .then((data) => data)
    }
)


const slice = createSlice({
    name: "courses",
    initialState: [],
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(getCoursesFromServer.fulfilled, (state, action) => {
            console.log("state", state);
            console.log("action", action.payload);

            state.push(...action.payload)
        })
    }
})

export default slice.reducer  