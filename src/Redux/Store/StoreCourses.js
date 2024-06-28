import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getCoursesFromServer = createAsyncThunk("courses/getCoursesFromServer",
    async () => {
        return fetch("https://redux-cms.iran.liara.run/api/courses")
            .then(res => res.json())
            .then(data => data)
    })

export const removeCourse = createAsyncThunk("course/removeCourse",
    async (id) => {
        return fetch(`https://redux-cms.iran.liara.run/api/courses/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => data)
    }
)

const slice = createSlice({
    name: "courses",
    initialState: [],
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(getCoursesFromServer.fulfilled, (state, action) => {
            return action.payload
        })
        builder.addCase(removeCourse.fulfilled, (state, action) => {
            return action.payload
        })
    }

})

export default slice.reducer