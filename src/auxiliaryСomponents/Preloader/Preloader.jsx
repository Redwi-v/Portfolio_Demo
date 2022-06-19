import style from './preloader.module.scss';
import preloaderGif from '../../assets/preloader.svg';

const Preloader = () => {
	return (
		<div className={style.preloader}>
			<img src={preloaderGif} alt='loading...' className={style.gif} />
		</div>
	);
};

export default Preloader;
