import React from "react";
import "./UsersData.css"

function UsersData({ firstname, lastname, email }) {

    return (
        <div className="users-infos">
            <div className="users-infos-infoBox">
                <img className="users-infos-infoBox-img" src="./img/admin/profile/banana.png" alt="pic" />
                <div className="users-infos-infoBox-nameEmail">
                    <h4 className="users-infos-infoBox-nameEmail-name">{firstname}</h4>
                    <h6 className="users-infos-infoBox-nameEmail-email">{email}</h6>
                </div>
            </div>
            <div className="users-infos-btns">
                <button className="users-infos-btns-btn massage">پیام ها</button>
                <button className="users-infos-btns-btn infos">اطلاعات</button>
                <button className="users-infos-btns-btn delete">حذف</button>
            </div>
        </div>
    )
}

export default UsersData