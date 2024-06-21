import React from "react";
import "./Courses.css"
import CourseBox from "../../Components/CourseBox/CourseBox";


function Courses() {

    return (

        <div className="courses-ctrl">

            <CourseBox></CourseBox>
            <div className="courses-btns-main">
                <button className="courses-btns-main-btn create">افزودن دوره جدید</button>
                <button className="courses-btns-main-btn offs">اعمال تخفیف روز همه دوره ها</button>
                <button className="courses-btns-main-btn category">افزودن دسته بندی </button>
            </div>

        </div>
    )
}

export default Courses