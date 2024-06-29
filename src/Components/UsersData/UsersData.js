import React from "react";
import "./UsersData.css"
import { useDispatch } from "react-redux";
import { removeUser } from "../../Redux/Store/StoreUsers";
import swal from "sweetalert";

function UsersData({ _id, firstname, lastname, email }) {

    const dispatch = useDispatch()

    const removeHandler = () => {

        swal({
            title: "آیا از حذف اطمینان دارید ",
            icon: "warning",
            buttons: ["خیر", "بله"]
        }).then(result => {
            if (result) {
                dispatch(removeUser(_id))
                swal({
                    title: "حذف با موفقیت انجام شد",
                    icon: "success",
                    button: "بسیار خب"
                })
            }
        })

    }



    return (
        <div className="users-infos">
            <div className="users-infos-infoBox">
                <img className="users-infos-infoBox-img" src="./img/admin/profile/banana.png" alt="pic" />
                <div className="users-infos-infoBox-nameEmail">
                    <h4 className="users-infos-infoBox-nameEmail-name">{firstname} {lastname}</h4>
                    <h6 className="users-infos-infoBox-nameEmail-email">{email}</h6>
                </div>
            </div>
            <div className="users-infos-btns">
                <button className="users-infos-btns-btn massage">پیام ها</button>
                <button className="users-infos-btns-btn infos">اطلاعات</button>
                <button className="users-infos-btns-btn delete" onClick={removeHandler}>حذف</button>
            </div>
        </div>
    )
}

export default UsersData