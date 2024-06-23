import React from "react";
import "./UsersData.css"

function UsersData() {

    return (
        <>
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
            </div></>
    )
}
export default UsersData