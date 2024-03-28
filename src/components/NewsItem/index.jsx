import { formatTimeAgo } from "../../helpers/formatTimeAgo";

import "./index.scss"

const NewsItem = ({ item }) => {
    return (
        <li className="news-item">
            <div className="news-item__wrapper" style={{ backgroundImage: `url(${item.image})`}}></div>
            <div className="news-item__info">
                <h3 className="news-item__title">{item.title}</h3>
                <p className="news-item__extra">
                    {formatTimeAgo(item.published)} by {item.author}
                </p>
            </div>
        </li>
    )
}

export default NewsItem;