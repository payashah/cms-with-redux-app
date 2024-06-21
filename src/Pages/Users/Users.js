import React from "react";
import "./Users.css"
import SearchSharpIcon from '@mui/icons-material/SearchSharp';

function Users() {

    return (

        <div className="users-ctrl">

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