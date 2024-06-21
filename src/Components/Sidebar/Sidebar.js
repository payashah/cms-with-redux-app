import React from "react";
import "./Sidebar.css"

function Sidebar() {

    return (

        <div className="sidebar-main">
            <div className="sidebar-ctrl">
                <img className="sidebar-img" src="./img/admin/banner/banner.png" alt="pic" />
                <div className="sidebar">
                    <div className="sidebar-nameBox">
                        <h3 className="sidebar-nameBox-name">نام :</h3>
                        <h3 className="sidebar-nameBox-family">پایا شاه ملکی</h3>
                    </div>
                    <div className="sidebar-jobBox">
                        <h3 className="sidebar-jobBox-name">تخصص :</h3>
                        <h3 className="sidebar-jobBox-job">Font-End Dev (React.js)</h3>
                    </div>
                    <div className="sidebar-courseBox">
                        <h3 className="sidebar-courseBox-name">تعداد دوره :</h3>
                        <h3 className="sidebar-courseBox-num">35 </h3>
                    </div>
                    <button className="sidebar-btn"> تغییر اطلاعات</button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar