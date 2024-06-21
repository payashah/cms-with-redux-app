import React from "react";
import "./CourseBox.css"
import CreditCardSharpIcon from '@mui/icons-material/CreditCardSharp';
import CategorySharpIcon from '@mui/icons-material/CategorySharp';
import GroupsSharpIcon from '@mui/icons-material/GroupsSharp';

function CourseBox() {

    return (

        <div className="courseBox">
            <img className="courseBox-img" src="./img/admin/course/course.png" alt="" />

            <div className="courseBox-information-ctrl">
                <div className="courseBox-descBox">
                    <h3 className="courseBox-descBox-title">دوره متخصص جاوا اسکریپت</h3>
                    <h6 className="courseBox-descBox-desc">دوره آموزش جاوا اسکریپت مربوط به زبان برنامه نویسی جاوا اسکریپت (Javascript) هست. یک زبان مشهور و محبوب که با جامعه‌ای فعال و بزرگ، یکی از کامل ترین و رایج ترین زبان های برنامه نویسی دنیاست.</h6>
                </div>
                <div className="courseBox-infos">
                    <div className="courseBox-infos-details">
                        <div className="courseBox-infos-details-box">
                            <CreditCardSharpIcon className="courseBox-infos-details-box-icon"></CreditCardSharpIcon>
                            <p className="courseBox-infos-details-box-text">قیمت : 3.500.000 تومان</p>
                        </div>
                        <div className="courseBox-infos-details-box">
                            <CategorySharpIcon className="courseBox-infos-details-box-icon"></CategorySharpIcon>
                            <p className="courseBox-infos-details-box-text">دسته بندی : فرانت اند</p>
                        </div>
                        <div className="courseBox-infos-details-box">
                            <GroupsSharpIcon className="courseBox-infos-details-box-icon"></GroupsSharpIcon>
                            <p className="courseBox-infos-details-box-text">تعداد فروش : 42 دوره</p>
                        </div>
                        <div className="courseBox-infos-btns">
                            <button className="courseBox-infos-btns-btn change">ویرایش</button>
                            <button className="courseBox-infos-btns-btn delete">حذف</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CourseBox