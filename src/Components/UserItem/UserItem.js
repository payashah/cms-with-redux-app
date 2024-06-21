import React from "react";
import "./UserItem.css"
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import FeedIcon from '@mui/icons-material/Feed';
import StoreIcon from '@mui/icons-material/Store';
import ViewCozyIcon from '@mui/icons-material/ViewCozy';
import { Link } from "react-router-dom";

function UserItem() {

    return (

        <div className="userItem-titles">
            <ul className="userItem-titles-ul">
                <li className="userItem-titles-ul-li">
                    <Link to="/" className="userItem-titles-ul-li-a" href="#">
                        <PeopleAltIcon className="userItem-titles-ul-li-a-logo"></PeopleAltIcon>
                        <p className="userItem-titles-ul-li-a-title">کاریران</p>
                    </Link>
                </li>

                <li className="userItem-titles-ul-li">
                    <Link to="infos" className="userItem-titles-ul-li-a" href="#">
                        <FeedIcon className="userItem-titles-ul-li-a-logo"></FeedIcon>
                        <p className="userItem-titles-ul-li-a-title">اطلاعات</p>
                    </Link>
                </li>

                <li className="userItem-titles-ul-li">
                    <Link to="/courses" className="userItem-titles-ul-li-a" href="#">
                        <StoreIcon className="userItem-titles-ul-li-a-logo"></StoreIcon>
                        <p className="userItem-titles-ul-li-a-title">دوره ها</p>
                    </Link>
                </li>

                <li className="userItem-titles-ul-li">
                    <Link to="/articles" className="userItem-titles-ul-li-a" href="#">
                        <ViewCozyIcon className="userItem-titles-ul-li-a-logo"></ViewCozyIcon>
                        <p className="userItem-titles-ul-li-a-title">وبلاگ</p>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default UserItem