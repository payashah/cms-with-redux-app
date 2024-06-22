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
                <h6 className="articleBox-details-desc-text">دوره آموزش جاوا اسکریپت مربوط به زبان برنامه نویسی جاوا اسکریپت (Javascript) هست. یک زبان مشهور و محبوب که با جامعه‌ای فعال و بزرگ، یکی از کامل ترین و رایج ترین زبان های برنامه نویسی دنیاست.

                    این زبان در اوایل با هدف ایجاد تغییراتی در ظاهر صفحاب وب و افزایش تعامل اونها با کاربر استفاده میشد.

                    اما با گذشت زمان اونقدر توسعه داده شد که میشه گفت آچار فرانسه دنیای برنامه نویسی شده و در همه زمینه ها از طراحی وب گرفته تا سیستم های رزرواسیون و اینترنت اشیاء کاربرد داره.

                    خبر خوب اینه که سبزلرن تصمیم گرفته برای مدت محدودی آموزش جاوا اسکریپت رایگان رو در اختیار کاربران علاقه‌مند قرار بده تا ببینیم دیگه چه بهونه ای برای شروع نکردن باقی میمونه.</h6>
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