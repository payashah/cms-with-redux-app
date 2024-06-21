import React from "react";
import "./Infos.css"
import PersonIcon from '@mui/icons-material/Person';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import DescriptionIcon from '@mui/icons-material/Description';
import EmailIcon from '@mui/icons-material/Email';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

function Infos() {

    return (

        <div className="infos-ctrl">
            <div className="infos-inputs">
                <div className="infos-inputs-box">
                    <PersonIcon className="infos-inputs-box-icon"></PersonIcon>
                    <input placeholder="نام ..." className="infos-inputs-box-input" type="text" />
                </div>
                <div className="infos-inputs-box">
                    <Diversity3Icon className="infos-inputs-box-icon"></Diversity3Icon>
                    <input placeholder="نام خانوادگی ..." className="infos-inputs-box-input" type="text" />
                </div>
                <div className="infos-inputs-box">
                    <DescriptionIcon className="infos-inputs-box-icon"></DescriptionIcon>
                    <input placeholder="نام کاربری ..." className="infos-inputs-box-input" type="text" />
                </div>
                <div className="infos-inputs-box">
                    <EmailIcon className="infos-inputs-box-icon"></EmailIcon>
                    <input placeholder="ایمیل ..." className="infos-inputs-box-input" type="text" />
                </div>
                <div className="infos-inputs-box">
                    <VpnKeyIcon className="infos-inputs-box-icon"></VpnKeyIcon>
                    <input placeholder="پسورد فعلی ..." className="infos-inputs-box-input" type="text" />
                </div>
                <div className="infos-inputs-box">
                    <VpnKeyIcon className="infos-inputs-box-icon"></VpnKeyIcon>
                    <input placeholder="پسورد جدید ..." className="infos-inputs-box-input" type="text" />
                </div>
                <div className="infos-inputs-box">
                    <VpnKeyIcon className="infos-inputs-box-icon"></VpnKeyIcon>
                    <input placeholder="تکرار پسورد جدید ..." className="infos-inputs-box-input" type="text" />
                </div>

            </div>
            <div className="infos-imges">
                <div>
                    <p>عکس پروفایل : </p>
                    <img className="infos-imges-profile" src="./img/admin/profile/banana.png" alt="pic" />
                </div>
                <div>
                    <p>عکس پس زمینه :</p>
                    <img className="infos-imges-banner" src="./img/admin/banner/banner.png" alt="pic" />
                </div>
            </div>

            <div className="infos-btn">
                <button className="infos-btn-main">آپدیت اطلاعات</button>
            </div>

        </div>
    )
}

export default Infos