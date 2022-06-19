import style from './project.module.scss';
import shareIcon from '../../assets/icons/share.svg';

import { NavLink } from 'react-router-dom';
import Preloader from '../../auxiliaryСomponents/Preloader/Preloader';
import { GitHubLink } from '../ProjectPreview/ProjectPreview';
const Project = props => {
	const { project, changeAlert } = props;
	const { title, date, info, tags, gitHubLink } = project;

	const location = window.location.href;
	if (!project) {
		return <Preloader />;
	}

	return (
		<div className={`${style.project} card`}>
			<div className={style.interactio}>
				<NavLink to={'/'} className=''>
					вернуться назад
				</NavLink>
				<button
					onClick={() => {
						navigator.clipboard.writeText(location);
						changeAlert({ text: 'Ссылка скопирована (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧', color: 'green' });
					}}>
					поделиться <img src={shareIcon} alt='icon' />
				</button>
			</div>
			<div className={style.info}>
				<h1 className={style.title}>{title}</h1>
				<div className={style.date}>{date}</div>
			</div>
			<div className={style.mainInfo}>
				<Information info={info} />
			</div>
			<ul className={style.tags_list}>
				<Tags tags={tags} />
			</ul>
			<GitHubLink className={style.git_link} gitHubLink={gitHubLink} />
		</div>
	);
};

const Information = props => {
	const { info } = props;

	return info.map((infoObject, index) => {
		switch (infoObject.type) {
			case 'image':
				return (
					<div key={index} className={style.image}>
						<img src={infoObject.information} alt={infoObject.alt} />
					</div>
				);
			//----
			case 'text':
				return <p key={index}>{infoObject.information}</p>;
			default:
				break;
		}
		return '';
	});
};

const Tags = ({ tags }) => {
	return tags.map((tag, index) => {
		return (
			<li key={index} className={style.tag}>
				{tag.name}
			</li>
		);
	});
};

export default Project;
