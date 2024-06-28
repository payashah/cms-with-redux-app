import React, { useEffect } from "react";
import "./Articles.css"
import CreditCardSharpIcon from '@mui/icons-material/CreditCardSharp';
import ArticleBox from "../../Components/ArticleBox/ArticleBox";
import { useDispatch, useSelector } from "react-redux";
import { getArticlesFromServer } from "../../Redux/Store/StoreArticles";


function Articles() {

    const articles = useSelector((state) => state.articles)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getArticlesFromServer())
    }, [])



    return (

        <div className="articles-ctrl">
            {articles.map((article) => (
                <ArticleBox key={article._id} {...article}></ArticleBox>

            ))}
            <button className="acticle-main-btn">افزودن مقاله جدید</button>

        </div>
    )
}

export default Articles