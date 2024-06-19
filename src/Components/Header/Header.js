import React from "react";
import "./Header.css"
import NotificationsIcon from '@mui/icons-material/Notifications';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

function Header() {

    return (

        <div className="header-ctrl">
            <div className="header-right">
                <img className="header-right-img" src="./img/admin/profile/banana.png" alt="pic" />
                <div className="header-right-nameJob">
                    <h3 className="header-right-nameJob-name">پایا شاه ملکی</h3>
                    <h5 className="header-right-nameJobe-job">Front-End Dev (React.js)</h5>
                </div>
            </div>
            <div className="header-left">
                <button className="header-left-btn mode"><LightModeIcon></LightModeIcon></button>
                <button className="header-left-btn notife"><NotificationsIcon> </NotificationsIcon> <span className="header-left-btn notife-span">3</span></button>
                <button className="header-left-btn exit">خروج</button>
            </div>
        </div>
    )
}

export default Header