import projects from '../API/projects';
import { changeAlert } from './alert';
import projectsApi from '../API/projects';

const SET_PROGECTS = 'SET_PROGECTS';
const LOAD = 'LOAD';

const initialState = {
	projects: LOAD,
	// {
	// 	_id: '1',
	// 	title: 'Project Title',
	// 	discription: `		Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore velit, non earum ad recusandae provident
	//       reiciendis excepturi vitae consequuntur architecto reprehenderit labore animi quis veniam pariatur culpa cum
	//       neque iste.`,
	// 	tags: ['tag1', 'tagNum2'],
	// 	gitHubLink: 'https://yandex.ru',
	// 	prevImage: testimg,
	// },
	// {
	// 	_id: 2,
	// 	title: 'Project Title',
	// 	discription: `		Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore velit, non earum ad recusandae provident
	//       reiciendis excepturi vitae consequuntur architecto reprehenderit labore animi quis veniam pariatur culpa cum
	//       neque iste.`,
	// 	tags: ['tag1', 'tagNum2'],
	// 	gitHubLink: 'https://yandex.ru',
	// 	prevImage: testimg,
	// },
	// {
	// 	_id: 3,
	// 	title: 'Project Title',
	// 	discription: `		Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore velit, non earum ad recusandae provident
	//       reiciendis excepturi vitae consequuntur architecto reprehenderit labore animi quis veniam pariatur culpa cum
	//       neque iste.`,
	// 	tags: ['tag1', 'tagNum2'],
	// 	gitHubLink: 'https://yandex.ru',
	// 	prevImage: testimg,
	// },
};

export const projectsList = (state = initialState, action) => {
	switch (action.type) {
		case SET_PROGECTS:
			return { ...state, projects: action.projects };
		default:
			return state;
	}
};

//AC
const setProjects = projects => {
	return {
		type: SET_PROGECTS,
		projects: projects,
	};
};

//thunks
export const getProjects = (page, searchObject) => async dispatch => {
	dispatch(setProjects(LOAD));
	const projectsPage = await projects.getProjects(page, searchObject);
	dispatch(setProjects(projectsPage));
};

export const deleteProject = id => async dispatch => {
	try {
		await projectsApi.dleteProject(id);
		dispatch(
			changeAlert({
				color: 'green',
				text: 'Project deleted',
			}),
		);
		dispatch(getProjects());
	} catch (error) {
		dispatch(
			changeAlert({
				color: 'red',
				text: 'project not deleted',
			}),
		);
	}
};
