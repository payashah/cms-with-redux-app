import React from "react";
import "./CourseBox.css"
import CreditCardSharpIcon from '@mui/icons-material/CreditCardSharp';
import CategorySharpIcon from '@mui/icons-material/CategorySharp';
import GroupsSharpIcon from '@mui/icons-material/GroupsSharp';

function CourseBox({ title, price, category, registersCount, desc }) {

    return (

        <div className="courseBox">
            <img className="courseBox-img" src="./img/admin/course/course.png" alt="" />

            <div className="courseBox-information-ctrl">
                <div className="courseBox-descBox">
                    <h3 className="courseBox-descBox-title">{title}</h3>
                    <h6 className="courseBox-descBox-desc">{desc}</h6>
                </div>
                <div className="courseBox-infos">
                    <div className="courseBox-infos-details">
                        <div className="courseBox-infos-details-box">
                            <CreditCardSharpIcon className="courseBox-infos-details-box-icon"></CreditCardSharpIcon>
                            <p className="courseBox-infos-details-box-text">قیمت : {price.toLocaleString()} تومان</p>
                        </div>
                        <div className="courseBox-infos-details-box">
                            <CategorySharpIcon className="courseBox-infos-details-box-icon"></CategorySharpIcon>
                            <p className="courseBox-infos-details-box-text">دسته بندی : {category}</p>
                        </div>
                        <div className="courseBox-infos-details-box">
                            <GroupsSharpIcon className="courseBox-infos-details-box-icon"></GroupsSharpIcon>
                            <p className="courseBox-infos-details-box-text">تعداد فروش : {registersCount}</p>
                        </div>

                    </div>
                    <div className="courseBox-infos-btns">
                        <button className="courseBox-infos-btns-btn change">ویرایش</button>
                        <button className="courseBox-infos-btns-btn delete">حذف</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CourseBox