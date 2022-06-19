import axiosInstans from './axiosInstans';
import testImage from '../assets/test.jpg';

const initialPath = '/admin/project/';

const projectsCount = 10;

const projects = {
	projectsList: [],

	project: id => {
		return {
			_id: id,
			title: 'Test ',
			date: new Date().toISOString().slice(0, 10),
			discription:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			info: [
				{
					type: 'text',
					information: 'new Text',
				},
				{
					type: 'image',
					information: testImage,
				},
			],
			tags: [
				{ name: 'Scss' },
				{ name: 'React' },
				{ name: 'Formik' },
				{ name: 'Axios' },
				{ name: 'Html 5' },
				{ name: 'Webpack + gulp' },
				{ name: 'Redux' },
			],
			gitHubLink: '',
			prevImage: [
				{
					type: 'image',
					information: testImage,
				},
			],
		};
	},
};

for (let i = 0; i < 5; i++) {
	projects.projectsList.push(projects.project(i));
}

console.log(projects);

class ProjectsApi {
	async getProjects(page, searchObject) {
		try {
			return projects;
		} catch (error) {
			console.error(error);
		}
	}

	async sendProject(project) {}

	async dleteProject(id) {}

	async getProject(id) {}
}

export default new ProjectsApi();
