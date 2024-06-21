import React from "react";
import "./ArticleBox.css"
import CategorySharpIcon from '@mui/icons-material/CategorySharp';
import GroupsSharpIcon from '@mui/icons-material/GroupsSharp';

function ArticleBox() {

    return (

        <div className="articleBox-details">
            <img className="articleBox-details-img" src="./img/store/hero-bg-2.jpg" alt="" />
            <div className="articleBox-details-desc">
                <h3 className="articleBox-details-desc-title"> متخصص جاوا اسکریپت</h3>
                <h6 className="articleBox-details-desc-text">می بینید که روز به روز تقاضا برای متخصصین جاوا اسکریپت داره بیشتر و بیشتر میشه. پس اگه دوست دارید بهترین آموزش جاوا اسکریپت رو به صورت صفر تا صد دریافت کنید، میتونید روی سبزلرن حساب کنید.</h6>
                <div className="articleBox-information">
                    <div className="articleBox-information-category-ctrl">
                        <div className="articleBox-information-category">
                            <CategorySharpIcon className="articleBox-information-icon category"></CategorySharpIcon>
                            <p className="articleBox-information-text">دسته بندی : فرانت اند</p>
                        </div>
                        <div className="articleBox-information-category">
                            <GroupsSharpIcon className="articleBox-information-icon show"></GroupsSharpIcon>
                            <p className="articleBox-information-text">تعداد بازدید : 253</p>
                        </div>
                    </div>
                    <div className="articleBox-information-btns">
                        <button className="articleBox-information-btns-btn change">ویرایش</button>
                        <button className="articleBox-information-btns-btn delete">حذف</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticleBox