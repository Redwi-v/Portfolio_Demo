import style from './projectpreview.module.scss';
import { NavLink } from 'react-router-dom';
import githubicon from '../../assets/icons/github.ico';

const ProjectPreview = props => {
	const { title, tags, prevImage, gitHubLink, id, discription } = props;

	const renderTags = tags.map((tag, index) => {
		return (
			<li key={index} className={style.tag}>
				{tag.name}
			</li>
		);
	});

	//discriptionFormat
	const discriptionFormat = (discription, maxLength = 50) => {
		if (discription.length <= 100) return discription;

		let formatedText = discription.split(' ', maxLength);
		formatedText.push('...');

		return formatedText.join(' ');
	};

	return (
		<div className={`${style.projectpreview} card`}>
			<div className={style.image}>
				<NavLink to={`/project/${id}`}>
					<img src={prevImage[0].information} alt='project' />
				</NavLink>
			</div>
			<div className={style.info}>
				<div className={style.main}>
					<h2 className={style.title}>{title}</h2>
					<p className={style.discription}>{discriptionFormat(discription)}</p>
					<ul className={style.tag_list}>{renderTags}</ul>
				</div>
				<GitHubLink gitHubLink={gitHubLink} />
			</div>
		</div>
	);
};

export const GitHubLink = props => {
	const { gitHubLink, className } = props;

	return (
		<a href={gitHubLink} target='_blank' className={`${style.link} ${className}`}>
			<span>GitHub</span>
			<img className={style.githubicon} src={githubicon} alt='git' />
		</a>
	);
};

export default ProjectPreview;
