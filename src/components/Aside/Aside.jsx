import style from './aside.module.scss';

//images
import asideBackground from '../../assets/asideBackground.jpg';
import avatar from '../../assets/avatar.jpg';
import telegram from '../../assets/icons/telegram.png';
import github from '../../assets/icons/github.ico';

export const Aside = props => {
	return (
		<aside className={style.aside}>
			<div className={style.backgroundImage}>
				<img src={asideBackground} alt='background' />
			</div>

			<About {...props} style={style} />
		</aside>
	);
};

export const About = props => {
	const { style } = props;

	return (
		<div className={style.about}>
			<div className={style.avatar}>
				<img src={avatar} alt='' />
			</div>
			<div className={style.name}>Кайсин Андрей</div>
			<p className={style.profession}>front-end разработчик</p>
			<ul className={style.socialMedia}>
				<SocialItem href={'https://t.me/REDWI_a'} icon={telegram} />
				<SocialItem href={'https://github.com/Redwi-v'} icon={github} />
			</ul>
			<a className={style.tel} href='tel:+79212994200'>
				+7 921 299 42 00
			</a>
			<div className={style.aboutText}>
				Начинающий FrontEnd разработчик, год занимаюсь версткой и разработкой сайтов. React, Redux, formik, sass, git,
				gulp+webpak, BAM, js, html 5, css 3.
			</div>
		</div>
	);
};

const SocialItem = ({ href, icon }) => {
	return (
		<li className={style.item}>
			<a target='_blank' href={href}>
				<img src={icon} alt='social media' />
			</a>
		</li>
	);
};

export default Aside;
