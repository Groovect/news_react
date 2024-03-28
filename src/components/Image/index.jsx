import "./index.scss";

const Image = ({ img }) => {
	return (
		<div className='image-wrapper'>
			{img && <img src={img} alt='news' className='image-wrapper__img' />}
		</div>
	);
};

export default Image;
