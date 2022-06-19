import { connect } from 'react-redux';
import Alert from './Alert';

const AlertContainer = props => {
	return <Alert {...props} />;
};

const mapSateToProps = state => {
	return {
		alertText: state.alert.text,
		color: state.alert.color,
		isOpen: state.alert.isOpen,
	};
};

export default connect(mapSateToProps, {})(AlertContainer);
