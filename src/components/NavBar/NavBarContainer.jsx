import NavBar from './NavBar';
import { getProjects } from '../../redux/projectsList';
import { useParams } from 'react-router-dom';
import { closeOpen } from '../../redux/poopUp';
import { connect } from 'react-redux';

const NavBarContainer = props => {
	const { projectsLIst, getProjects, closeOpen } = props;

	const page = useParams().page;

	const search = input => {
		if (!input.inputText.replace(/\s/g, '') && projectsLIst?.projectsList?.length) {
			return;
		}
		getProjects(page, { title: input.inputText });
		// getProjects(page);
	};
	const openAboutPoopUp = () => {
		closeOpen();
	};

	return <NavBar {...props} search={search} openAboutPoopUp={openAboutPoopUp} />;
};

const mapStateToProps = state => {
	return {
		projectsLIst: state.projectsList.projects,
	};
};

export default connect(mapStateToProps, { getProjects, closeOpen })(NavBarContainer);
