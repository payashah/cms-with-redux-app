import React from "react";
import "./ArticleBox.css"
import CategorySharpIcon from '@mui/icons-material/CategorySharp';
import GroupsSharpIcon from '@mui/icons-material/GroupsSharp';
import { useDispatch } from "react-redux";
import { removeArticle } from "../../Redux/Store/StoreArticles";
import swal from "sweetalert";

function ArticleBox({ _id, title, category, views, desc }) {

    const dispatch = useDispatch()

    const removeHandler = () => {
        swal({
            title: "آیا از حذف این مقاله اطمینان دارید؟",
            icon: "warning",
            buttons: ["خیر", "بله"]
        }).then(result => {
            if (result) {
                dispatch(removeArticle(_id))
                swal({
                    title: "حذف با موفقیت انجام شد",
                    icon: "success",
                    button: "بسیار خب"
                })
            }
        })

    }

    return (

        <div className="articleBox-details">
            <img className="articleBox-details-img" src="./img/store/hero-bg-2.jpg" alt="" />
            <div className="articleBox-details-desc">
                <h3 className="articleBox-details-desc-title">{title}</h3>
                <h6 className="articleBox-details-desc-text">{desc}</h6>
                <div className="articleBox-information">
                    <div className="articleBox-information-category-ctrl">
                        <div className="articleBox-information-category">
                            <CategorySharpIcon className="articleBox-information-icon category"></CategorySharpIcon>
                            <p className="articleBox-information-text">دسته بندی : {category}</p>
                        </div>
                        <div className="articleBox-information-category">
                            <GroupsSharpIcon className="articleBox-information-icon show"></GroupsSharpIcon>
                            <p className="articleBox-information-text">تعداد بازدید : {views}</p>
                        </div>
                    </div>
                    <div className="articleBox-information-btns">
                        <button className="articleBox-information-btns-btn change">ویرایش</button>
                        <button className="articleBox-information-btns-btn delete" onClick={removeHandler}>حذف</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticleBox