import style from './manageBoard.module.scss';

import crossIcon from '../../../assets/icons/cross.png';
import { NavLink, useLocation } from 'react-router-dom';
import { ProjectsList } from '../../ProjectsLIst/ProjectsList';

const ManageBoard = props => {
	const { projects, getProjects, deleteProject } = props;

	const renderedProjects = () => {
		if (projects !== 'LOAD' && projects) {
			return projects.projectsList.map(project => {
				return (
					<li key={project._id} className={style.project_prev}>
						{<ProjectItem {...project} deleteProject={deleteProject} />}
					</li>
				);
			});
		}
	};

	return (
		<div className={style.container}>
			<h1 className={style.title}>Manage board</h1>

			<div className={style.center}>
				<ProjectsList
					projects={projects}
					getProjects={getProjects}
					renderАnother={renderedProjects}
					paginationTo={'/admin/manage/'}
					title={false}
					ListClassName={style.project_list}
				/>
			</div>
		</div>
	);
};

const ProjectItem = props => {
	const { title, prevImage, id, deleteProject } = props;

	const match = useLocation();

	return (
		<div className={style.prev}>
			<button
				className={style.delete}
				onClick={() => {
					deleteProject(id);
				}}>
				<img src={crossIcon} alt='cross' />
			</button>

			<NavLink to={`/admin/${id}`}>
				<div className={style.img_container}>
					<img className={style.prev_image} src={prevImage[0].information}></img>
				</div>
				<h2 className={style.prev_title}>{title}</h2>
			</NavLink>
		</div>
	);
};

export default ManageBoard;
