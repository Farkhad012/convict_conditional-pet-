import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import articlesData from '../ArticleList/articles'
import { PathName } from '../../constants/routes';

import "./styles.scss";

export default function ArticleDetails() {
  const { link } = useParams();
  const [article, setArticle] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (link) {
      // Находим статью по ссылке (link) в массиве articlesData
      const selectedArticle = articlesData.find(article => article.link === link);

      // Если статья найдена, устанавливаем её в state
      if (selectedArticle) {
        setArticle(selectedArticle);
      }
    }
  }, [link]);

  const goBack = () => navigate(-1);

  return (
    <section className="block">
      {article && (
        <div className="container block-content">
          <div className="block-nav">
            <button onClick={goBack} className="button-link">🠐 назад</button>
          </div>

          <h2>{article.title}</h2>
          <div>
            {Array.isArray(article.content) ? (
              article.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))
            ) : (
              <p>{article.content}</p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
