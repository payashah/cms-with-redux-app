import React, { useEffect } from "react";
import "./Users.css"
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import { useDispatch, useSelector } from "react-redux";
import { getUsersFromServer } from "../../Redux/Store/StoreUsers";
import UsersData from "../../Components/UsersData/UsersData";


function Users() {

    const users = useSelector((state) => state.users)

    const dispatch = useDispatch()

    console.log("users :", users);

    useEffect(() => {
        dispatch(getUsersFromServer("https://fakestoreapi.com/products"))
    }, [])


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
                <UsersData></UsersData>
            </div>
        </div>
    )
}

export default Users