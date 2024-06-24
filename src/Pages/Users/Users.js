import React, { useEffect } from "react";
import "./Users.css"
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import { useDispatch, useSelector } from "react-redux";
import { getUsersFromServer } from "../../Redux/Store/StoreUsers";
import UsersInfos from "../../Components/UsersData/UsersInfos";


function Users() {

    const users = useSelector((state) => state.users)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsersFromServer("https://fakestoreapi.com/products"))
    }, [])


    return (

        <div className="users-ctrl">

            <div className="users-email">
                <div className="users-emailBox">
                    <div className="users-email-inputBox">
                        <SearchSharpIcon className="users-email-inputBox-logo"></SearchSharpIcon>
                        <input className="users-email-inputBox-input" placeholder="نام یا آدرس ایمیل کاربر را وارد کنید ..." type="text" />
                    </div>
                    <button className="users-email-inputBox-btn">حذف کاربر</button>
                </div>
                <div>
                    <UsersInfos></UsersInfos>
                    <UsersInfos></UsersInfos>

                </div>
            </div>

        </div>
    )
}

export default Users