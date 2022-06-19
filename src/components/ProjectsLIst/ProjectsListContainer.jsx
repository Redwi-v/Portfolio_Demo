import { connect } from 'react-redux';
import ProjectsList from './ProjectsList';
import { getProjects } from '../../redux/projectsList';
import { useEffect } from 'react';

const ProjectsListContainer = props => {
	return <ProjectsList {...props} />;
};

const mapStateToProps = state => {
	return {
		projects: state.projectsList.projects,
	};
};

export default connect(mapStateToProps, { getProjects })(ProjectsListContainer);
