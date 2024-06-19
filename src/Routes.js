import React from "react";
import Users from "./Pages/Users/Users";
import Courses from "./Pages/Courses/Courses";
import Infos from "./Pages/Infos/Infos";
import Articles from "./Pages/Articles/Articles";


const routes = [
    { path: "/", element: <Users></Users> },
    { path: "/Courses", element: <Courses></Courses> },
    { path: "/Infos", element: <Infos></Infos> },
    { path: "/Article", element: <Articles></Articles> },
]


export default routes