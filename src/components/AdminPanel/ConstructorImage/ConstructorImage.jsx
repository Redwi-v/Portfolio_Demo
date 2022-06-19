import { useRef } from 'react';
import style from './constructor_image.module.scss';
import imageIcon from '../../../assets/icons/image.png';

const ConstructorImage = props => {
	let { information, alt = 'image', changeImage, index, className } = props;
	const inputRef = useRef(null);

	const changeSrc = () => {
		const src = inputRef.current.files[0];
		changeImage(index, src);
	};

	return (
		<div className={` ${style.image} ${className}`}>
			<label className={`${style.imageIcon} ${information ? '' : style.noImage}`} htmlFor={`imageInput ${index}`}>
				<img src={imageIcon} alt='send Image' />
			</label>
			<input id={`imageInput ${index}`} className={style.input} type='file' ref={inputRef} onChange={changeSrc} />
			{information ? <img src={information} alt={alt} /> : null}
		</div>
	);
};

export default ConstructorImage;
