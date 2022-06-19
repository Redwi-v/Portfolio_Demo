import ProjectConstruktor from './ProjectConstruktor';
import { changeAlert } from '../../../redux/alert';
import { closeOpen } from '../../../redux/poopUp';
import { changeComponent } from '../../../redux/poopUp';
import { sendProjectOnServer } from '../../../redux/adminpanel';

import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import projectsApi from '../../../API/projects';

const ProjectConstruktorContainer = props => {
	const {
		token,
		isSending,
		//functions
		changeAlert,
		closeOpen,
		changeComponent,
		sendProjectOnServer,
	} = props;

	const [state, setState] = useState({
		title: 'Title',
		date: new Date().toISOString().slice(0, 10),
		info: [],
		tags: [],
		gitHubLink: '',
		prevImage: [{}],
	});

	// если есть ID в пути, то рендерим существующий обект
	const projectId = Number(useParams().projectId);
	useEffect(() => {
		if (projectId && typeof projectId === 'number') {
			projectsApi.getProject(Math.floor(projectId)).then(res => {
				setState({ ...state, ...res.data.project, ...res.data.projectPrew });
			});
		}
	}, [projectId]);

	// info changers
	const infoManager = new InfoManager(state.info);

	const changeTags = tagNmae => {
		const newTagList = state.tags.filter(tag => {
			if (tag.name === tagNmae) return;
			return tag.name;
		});

		if (newTagList.length === state.tags.length) {
			setState({ ...state, tags: [...state.tags, { name: tagNmae }] });
		} else {
			setState({ ...state, tags: newTagList });
		}
	};

	const addNewValue = type => {
		const text = infoManager.createNewValue(type);
		setState({ ...state, info: [...state.info, text] });
	};

	const changePrevImage = (index, image) => {
		const infoManager = new InfoManager(state.prevImage);
		const read = new FileReader();
		read.readAsDataURL(image);

		read.onload = () => {
			const newInfo = infoManager.getСhangedSrc(index, read.result);
			setState({ ...state, prevImage: newInfo });
		};
	};
	const changeText = (index, newText) => {
		const newInfo = infoManager.getСhangedText(index, newText);
		setState({ ...state, info: newInfo });
	};
	const changeTitle = newTitle => {
		setState({ ...state, title: newTitle });
	};
	const changeGitHubLink = GitHubLink => {
		setState({ ...state, gitHubLink: GitHubLink.inputText });
	};
	const changeImage = (index, newSrc) => {
		const read = new FileReader();
		read.readAsDataURL(newSrc);

		read.onload = () => {
			const newInfo = infoManager.getСhangedSrc(index, read.result);
			setState({ ...state, info: newInfo });
		};
	};

	//sendProject
	const sendProject = () => {
		let errText = null;

		if (state.info.length === 0) {
			errText = 'Please add at least one item before submitting your project.';
		} else if (state.tags.length === 0) {
			errText = 'Please add at least one TAGS before submitting your project.';
		} else if (state.title === 'Title') {
			errText = 'Title? really?';
		} else if (state.gitHubLink.length <= 10) {
			errText = 'Add gitHub link';
		}

		if (errText) {
			changeAlert({
				color: 'red',
				text: errText,
			});
			console.error(errText);
			return;
		}
		changeComponent(2);
		closeOpen();
	};

	const CleaearAll_And_SendProject = () => {
		sendProjectOnServer(state, token);
		console.log(state);

		setState({ ...state, info: [], tags: [], title: 'Title', gitHubLink: '', prevImage: [{}] });
		closeOpen();
	};

	return (
		<ProjectConstruktor
			{...props}
			state={state}
			isSending={isSending}
			//functions
			changeText={changeText}
			changeTitle={changeTitle}
			changeImage={changeImage}
			addNewValue={addNewValue}
			sendProject={sendProject}
			changeTags={changeTags}
			closeOpen={closeOpen}
			changeGitHubLink={changeGitHubLink}
			changeComponent={changeComponent}
			changePrevImage={changePrevImage}
			sendProjectOnServer={CleaearAll_And_SendProject}
		/>
	);
};

class InfoManager {
	constructor(info) {
		this.info = info;
	}

	createNewValue(type, information, dopSetting = {}) {
		switch (type) {
			case 'text':
				return { type: type, information: information || 'new Text' };
			case 'image':
				return { type: type, information: information || null, alt: dopSetting.alt || 'image' };
			default:
				const error = 'not a valid object type: ' + type;
				console.error(error);
				return { error };
		}
	}

	getСhangedText(index, newText) {
		const newValue = this.createNewValue('text', newText);
		return this.#getChangetInfo(index, newValue);
	}
	getСhangedSrc(index, newSrc) {
		const newValue = this.createNewValue('image', newSrc);
		return this.#getChangetInfo(index, newValue);
	}

	#getChangetInfo(index, newValue) {
		const newInfo = [...this.info];
		newInfo.splice(index, 1, newValue);
		return newInfo;
	}
}

export default connect(
	state => {
		return {
			token: state.adminpanel.token,
			isSending: state.adminpanel.isSending,
		};
	},
	{ changeAlert, closeOpen, changeComponent, sendProjectOnServer },
)(ProjectConstruktorContainer);
