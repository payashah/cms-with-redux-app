import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./Store/StoreUsers"
import coursesReducer from "./Store/StoreCourses"
import articlesReducer from "./Store/StoreArticles"

export default configureStore({
    reducer: {
        users: usersReducer,
        courses: coursesReducer,
        articles: articlesReducer
    }
})