import ProjectPreview from '../ProjectPreview/ProjectPreview';
import style from './ProjectsList.module.scss';
import Preloader from '../../auxiliaryСomponents/Preloader/Preloader';
import { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';

export const ProjectsList = props => {
	const { projects, renderАnother = null, ListClassName, title = true } = props;
	const page = +useParams().page;

	const getProjectsList = page => {
		props.getProjects(page || 1);
	};

	const renderProjects = () => {
		if (projects === 'LOAD') {
			return <Preloader />;
		} else if (projects?.projectsList?.length === 0) {
			return 'Ничего не найдено';
		} else if (projects && projects !== 'LOAD') {
			return projects.projectsList.map(project => {
				return (
					<li key={project._id} className={style.project_prev}>
						<ProjectPreview {...project} />
					</li>
				);
			});
		}
	};

	return (
		<div className=''>
			{title && <h1 className='main-title'>Мои работы</h1>}

			<ul className={`${style.projects_list} ${ListClassName}`}>
				{(renderАnother && renderАnother()) || renderProjects()}
			</ul>

			<ul className={style.pages}>
				<Pagination
					projectsCount={projects?.projectsCount || 0}
					page={page}
					getProjectsList={getProjectsList}
					{...props}
				/>
			</ul>
		</div>
	);
};

export const Pagination = props => {
	const { projectsCount, getProjectsList, page, pageSize, paginationTo = '/' } = props;

	const pagesCount = Math.ceil(projectsCount / (pageSize || 10));

	useEffect(() => {
		getProjectsList(page);
	}, [page]);

	const renderPages = () => {
		const pages = [];
		const validPage = isNaN(+page) ? 1 : +page;

		for (let i = 1; i <= pagesCount; i++) {
			const activeClass = validPage === i ? style.active : '';

			pages.push(
				<li key={i}>
					<NavLink to={paginationTo + `${i}`} className={`${style.page} ${activeClass}`}>
						{i}
					</NavLink>
				</li>,
			);
		}
		return pages;
	};

	return renderPages();
};

export default ProjectsList;
