import React from "react";
import "./Articles.css"
import FeedIcon from '@mui/icons-material/Feed';
import StoreIcon from '@mui/icons-material/Store';
import ViewCozyIcon from '@mui/icons-material/ViewCozy';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CategorySharpIcon from '@mui/icons-material/CategorySharp';
import GroupsSharpIcon from '@mui/icons-material/GroupsSharp';



import CreditCardSharpIcon from '@mui/icons-material/CreditCardSharp';

function Articles() {

    return (

        <div className="articles-ctrl">
            <div className="articles-titles">
                <ul className="articles-titles-ul">
                    <li className="articles-titles-ul-li">
                        <a className="articles-titles-ul-li-a" href="#">
                            <PeopleAltIcon className="articles-titles-ul-li-a-logo"></PeopleAltIcon>
                            <p className="articles-titles-ul-li-a-title">کاریران</p>
                        </a>
                    </li>

                    <li className="articles-titles-ul-li">
                        <a className="articles-titles-ul-li-a" href="#">
                            <FeedIcon className="articles-titles-ul-li-a-logo"></FeedIcon>
                            <p className="articles-titles-ul-li-a-title">اطلاعات</p>
                        </a>
                    </li>

                    <li className="articles-titles-ul-li">
                        <a className="articles-titles-ul-li-a" href="#">
                            <StoreIcon className="articles-titles-ul-li-a-logo"></StoreIcon>
                            <p className="articles-titles-ul-li-a-title">دوره ها</p>
                        </a>
                    </li>

                    <li className="articles-titles-ul-li">
                        <a className="articles-titles-ul-li-a" href="#">
                            <ViewCozyIcon className="articles-titles-ul-li-a-logo"></ViewCozyIcon>
                            <p className="articles-titles-ul-li-a-title">وبلاگ</p>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="article-details">
                <img className="article-details-img" src="./img/store/hero-bg-2.jpg" alt="" />
                <div className="article-details-desc">
                    <h3 className="article-details-desc-title"> متخصص جاوا اسکریپت</h3>
                    <h6 className="article-details-desc-text">می بینید که روز به روز تقاضا برای متخصصین جاوا اسکریپت داره بیشتر و بیشتر میشه. پس اگه دوست دارید بهترین آموزش جاوا اسکریپت رو به صورت صفر تا صد دریافت کنید، میتونید روی سبزلرن حساب کنید.</h6>
                    <div className="article-information">
                        <div className="article-information-category-ctrl">
                            <div className="article-information-category">
                                <CategorySharpIcon className="article-information-icon category"></CategorySharpIcon>
                                <p className="article-information-text">دسته بندی : فرانت اند</p>
                            </div>
                            <div className="article-information-category">
                                <GroupsSharpIcon className="article-information-icon show"></GroupsSharpIcon>
                                <p className="article-information-text">تعداد بازدید : 253</p>
                            </div>
                        </div>
                        <div className="article-information-btns">
                            <button className="article-information-btns-btn change">ویرایش</button>
                            <button className="article-information-btns-btn delete">حذف</button>
                        </div>
                    </div>
                </div>



            </div>
            <button className="acticle-main-btn">افزودن مقاله جدید</button>

        </div>
    )
}

export default Articles