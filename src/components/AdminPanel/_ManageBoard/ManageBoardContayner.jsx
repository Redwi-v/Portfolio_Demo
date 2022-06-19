import { connect } from 'react-redux';
import ManageBoard from './ManageBoard';
import { getProjects, deleteProject } from '../../../redux/projectsList';

const ManageBoardContainer = props => {
	return <ManageBoard {...props} />;
};

const mapStateToProps = state => {
	return {
		projects: state.projectsList.projects,
	};
};

export default connect(mapStateToProps, { getProjects, deleteProject })(ManageBoardContainer);
