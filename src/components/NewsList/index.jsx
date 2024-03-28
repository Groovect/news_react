import NewsItem from "../NewsItem";

import "./index.scss";

const NewsList = ({ news }) => {
    return (
        <ul className="news-list">
            {news.map(item => {
                return <NewsItem key={item.id} item={item}/>
            })}
        </ul>
    )
}

export default NewsList;