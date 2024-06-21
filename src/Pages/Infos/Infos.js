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
                    <input className="infos-inputs-box-input" type="text" />
                </div>
                <div className="infos-inputs-box">
                    <Diversity3Icon className="infos-inputs-box-icon"></Diversity3Icon>
                    <input className="infos-inputs-box-input" type="text" />
                </div>
                <div className="infos-inputs-box">
                    <DescriptionIcon className="infos-inputs-box-icon"></DescriptionIcon>
                    <input className="infos-inputs-box-input" type="text" />
                </div>
                <div className="infos-inputs-box">
                    <EmailIcon className="infos-inputs-box-icon"></EmailIcon>
                    <input className="infos-inputs-box-input" type="text" />
                </div>
                <div className="infos-inputs-box">
                    <VpnKeyIcon className="infos-inputs-box-icon"></VpnKeyIcon>
                    <input className="infos-inputs-box-input" type="text" />
                </div>
                <div className="infos-inputs-box">
                    <VpnKeyIcon className="infos-inputs-box-icon"></VpnKeyIcon>
                    <input className="infos-inputs-box-input" type="text" />
                </div>
                <div className="infos-inputs-box">
                    <VpnKeyIcon className="infos-inputs-box-icon"></VpnKeyIcon>
                    <input className="infos-inputs-box-input" type="text" />
                </div>

            </div>
            <div className="infos-imges">
                <img className="infos-imges-profile" src="./img/admin/profile/banana.png" alt="pic" />
                <img className="infos-imges-banner" src="./img/admin/banner/banner.png" alt="pic" />
            </div>

        </div>
    )
}

export default Infos