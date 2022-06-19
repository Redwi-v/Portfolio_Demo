import { useState } from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import projectsApi from '../../API/projects';
import { changeAlert } from '../../redux/alert';

import Project from './Project';

const ProjectContainer = props => {
	const projectId = Math.floor(Number(useParams().id));
	const [projectState, setStateProject] = useState({
		project: 0,
	});

	useEffect(() => {
		projectsApi.getProject(projectId).then(res => {
			setStateProject({ ...projectState, project: res });
		});
	}, [projectId]);

	return <Project {...props} project={projectState.project} />;
};

export default connect(null, { changeAlert })(ProjectContainer);
