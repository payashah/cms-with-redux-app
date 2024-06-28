import "./Courses.css"
import CourseBox from "../../Components/CourseBox/CourseBox";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCoursesFromServer } from "../../Redux/Store/StoreCourses";




function Courses() {

    const courses = useSelector((state) => state.courses)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCoursesFromServer())
    }, [])

    return (

        <div className="courses-ctrl">
            {courses.map((course) => (
                <CourseBox key={course._id} {...course}></CourseBox>

            ))}
            <div className="courses-btns-main">
                <button className="courses-btns-main-btn create">افزودن دوره جدید</button>
                <button className="courses-btns-main-btn offs">اعمال تخفیف روز همه دوره ها</button>
                <button className="courses-btns-main-btn category">افزودن دسته بندی </button>
            </div>

        </div>
    )
}

export default Courses