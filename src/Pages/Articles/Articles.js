import React from "react";
import "./Articles.css"
import CreditCardSharpIcon from '@mui/icons-material/CreditCardSharp';
import ArticleBox from "../../Components/ArticleBox/ArticleBox";

function Articles() {

    return (

        <div className="articles-ctrl">
            <ArticleBox></ArticleBox>
            <button className="acticle-main-btn">افزودن مقاله جدید</button>

        </div>
    )
}

export default Articles