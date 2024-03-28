import { useState, useEffect } from "react";

import NewsBanner from "../../components/NewsBanner";
import NewsList from "../../components/NewsList";
import { getNews } from "../../api/apiNews";

import "./index.scss";

const Main = () => {
	const [news, setNews] = useState([]);

	useEffect(() => {
		const fetchNews = async () => {
			try {
				const response = await getNews();
				setNews(response.news);
			} catch (error) {
				console.log(error);
			}
		};

		fetchNews();
	}, []);

	return (
		<main className='main'>
			{news.length > 0 && <NewsBanner item={news[0]}/>}

            <NewsList news={news}/>
		</main>
	);
};

export default Main;
