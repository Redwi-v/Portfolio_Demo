import AdminPanel from './AdminPanel';
import { login } from '../../redux/adminpanel';

//ax
import { connect } from 'react-redux';

const AdminPanelContainer = props => {
	const { login } = props;

	const submitform = (values, { setSubmitting }) => {
		try {
			const { adminname, passwod } = values;
			login(adminname, passwod);
			setSubmitting(false);
		} catch (error) {
			console.log('roo');
		}
	};

	return <AdminPanel {...props} submitform={submitform} />;
};

const mapDispatchToProps = {
	login,
};

const mapStateToProps = state => {
	return {
		token: state.adminpanel.token,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminPanelContainer);
