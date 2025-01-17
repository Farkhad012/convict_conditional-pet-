import articlesData from './articles';
import LinkBtn from '../../components/LinkBtn';

import './styles.scss';

export function ArticleList() {
  return (
    <>
      <h2>Мудрость тела. Железные правила:</h2>
      <div className="block-content">
        {articlesData.map((article => (
          <LinkBtn
            key={article.id}
            textBtn={article.title.toUpperCase()}
            link={article.link}
          />
        )))}
      </div>
    </>
  )
}