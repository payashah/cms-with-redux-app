import React from "react";
import "./Users.css"
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import FeedIcon from '@mui/icons-material/Feed';
import StoreIcon from '@mui/icons-material/Store';
import ViewCozyIcon from '@mui/icons-material/ViewCozy';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';

function Users() {

    return (

        <div className="users-ctrl">
            <div className="users-titles">
                <ul className="users-titles-ul">
                    <li className="users-titles-ul-li">
                        <a className="users-titles-ul-li-a" href="#">
                            <PeopleAltIcon className="users-titles-ul-li-a-logo"></PeopleAltIcon>
                            <p className="users-titles-ul-li-a-title">کاریران</p>
                        </a>
                    </li>

                    <li className="users-titles-ul-li">
                        <a className="users-titles-ul-li-a" href="#">
                            <FeedIcon className="users-titles-ul-li-a-logo"></FeedIcon>
                            <p className="users-titles-ul-li-a-title">اطلاعات</p>
                        </a>
                    </li>

                    <li className="users-titles-ul-li">
                        <a className="users-titles-ul-li-a" href="#">
                            <StoreIcon className="users-titles-ul-li-a-logo"></StoreIcon>
                            <p className="users-titles-ul-li-a-title">دوره ها</p>
                        </a>
                    </li>

                    <li className="users-titles-ul-li">
                        <a className="users-titles-ul-li-a" href="#">
                            <ViewCozyIcon className="users-titles-ul-li-a-logo"></ViewCozyIcon>
                            <p className="users-titles-ul-li-a-title">وبلاگ</p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="users-email">
                <div className="users-email-inputBox">
                    <SearchSharpIcon className="users-email-inputBox-logo"></SearchSharpIcon>
                    <input className="users-email-inputBox-input" placeholder="نام یا آدرس ایمیل کاربر را وارد کنید ..." type="text" />
                </div>
                <button className="users-email-inputBox-btn">حذف کاربر</button>
            </div>
            <div className="users-infos">
                <div className="users-infos-infoBox">
                    <img className="users-infos-infoBox-img" src="./img/admin/profile/banana.png" alt="pic" />
                    <div className="users-infos-infoBox-nameJob">
                        <h4 className="users-infos-infoBox-nameJob-name">پایا شاه ملکی</h4>
                        <h6 className="users-infos-infoBox-nameJob-job">Front-End Dev (React.js)</h6>
                    </div>
                </div>
                <div className="users-infos-btns">
                    <button className="users-infos-btns-btn massage">پیام ها</button>
                    <button className="users-infos-btns-btn infos">اطلاعات</button>
                    <button className="users-infos-btns-btn delete">حذف</button>
                </div>
            </div>
        </div>
    )
}

export default Users