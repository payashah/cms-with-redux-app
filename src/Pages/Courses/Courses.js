import React from "react";
import "./Courses.css"
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import FeedIcon from '@mui/icons-material/Feed';
import StoreIcon from '@mui/icons-material/Store';
import ViewCozyIcon from '@mui/icons-material/ViewCozy';
import CreditCardSharpIcon from '@mui/icons-material/CreditCardSharp';
import CategorySharpIcon from '@mui/icons-material/CategorySharp';
import GroupsSharpIcon from '@mui/icons-material/GroupsSharp';

function Courses() {

    return (

        <div className="courses-ctrl">
            <div className="courses-titles">
                <ul className="courses-titles-ul">
                    <li className="courses-titles-ul-li">
                        <a className="courses-titles-ul-li-a" href="#">
                            <PeopleAltIcon className="courses-titles-ul-li-a-logo"></PeopleAltIcon>
                            <p className="courses-titles-ul-li-a-title">کاریران</p>
                        </a>
                    </li>

                    <li className="courses-titles-ul-li">
                        <a className="courses-titles-ul-li-a" href="#">
                            <FeedIcon className="courses-titles-ul-li-a-logo"></FeedIcon>
                            <p className="courses-titles-ul-li-a-title">اطلاعات</p>
                        </a>
                    </li>

                    <li className="courses-titles-ul-li">
                        <a className="courses-titles-ul-li-a" href="#">
                            <StoreIcon className="courses-titles-ul-li-a-logo"></StoreIcon>
                            <p className="courses-titles-ul-li-a-title">دوره ها</p>
                        </a>
                    </li>

                    <li className="courses-titles-ul-li">
                        <a className="courses-titles-ul-li-a" href="#">
                            <ViewCozyIcon className="courses-titles-ul-li-a-logo"></ViewCozyIcon>
                            <p className="courses-titles-ul-li-a-title">وبلاگ</p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="courses">
                <img className="courses-img" src="./img/admin/course/course.png" alt="" />

                <div className="course-information-ctrl">
                    <div className="courses-descBox">
                        <h3 className="courses-descBox-title">دوره متخصص جاوا اسکریپت</h3>
                        <h6 className="courses-descBox-desc">دوره آموزش جاوا اسکریپت مربوط به زبان برنامه نویسی جاوا اسکریپت (Javascript) هست. یک زبان مشهور و محبوب که با جامعه‌ای فعال و بزرگ، یکی از کامل ترین و رایج ترین زبان های برنامه نویسی دنیاست.</h6>
                    </div>
                    <div className="courses-infos">
                        <div className="courses-infos-details">
                            <div className="courses-infos-details-box">
                                <CreditCardSharpIcon className="courses-infos-details-box-icon"></CreditCardSharpIcon>
                                <p className="courses-infos-details-box-text">قیمت : 3.500.000 تومان</p>
                            </div>
                            <div className="courses-infos-details-box">
                                <CategorySharpIcon className="courses-infos-details-box-icon"></CategorySharpIcon>
                                <p className="courses-infos-details-box-text">دسته : فرانت اند</p>
                            </div>
                            <div className="courses-infos-details-box">
                                <GroupsSharpIcon className="courses-infos-details-box-icon"></GroupsSharpIcon>
                                <p className="courses-infos-details-box-text">تعداد فروش : 42 دوره</p>
                            </div>
                            <div className="courses-infos-btns">
                                <button className="courses-infos-btns-btn change">ویرایش</button>
                                <button className="courses-infos-btns-btn delete">حذف</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="courses-btns-main">
                <button className="courses-btns-main-btn create">افزودن دوره جدید</button>
                <button className="courses-btns-main-btn offs">اعمال تخفیف روز همه دوره ها</button>
                <button className="courses-btns-main-btn category">افزودن دسته بندی </button>
            </div>

        </div>
    )
}

export default Courses