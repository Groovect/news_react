import Image from "../Image";
import { formatTimeAgo } from "../../helpers/formatTimeAgo";

import "./index.scss";

const NewsBanner = ({ item }) => {
	return (
		<div className='banner'>
            <Image img={item?.image}/>
			<h3 className='banner__title'>{item.title}</h3>
			<p className='banner__extra'>
				{formatTimeAgo(item.published)} by {item.author}
			</p>
		</div>
	);
};

export default NewsBanner;
