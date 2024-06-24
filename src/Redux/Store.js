import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./Store/StoreUsers"
import coursesReducer from "./Store/StoreCourses"

export default configureStore({
    reducer: {
        users: usersReducer,
        courses: coursesReducer
    }
})