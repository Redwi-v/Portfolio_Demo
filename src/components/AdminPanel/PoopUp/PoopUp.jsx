import { connect } from 'react-redux';
import style from './poopUp.module.scss';
import { closeOpen } from '../../../redux/poopUp';

const PoopUp = props => {
	const { isOpen, closeOpen, children, componentId } = props;

	const closeWin = event => {
		if (event.target.id === 'closeBTN') closeOpen();
	};

	if (!isOpen) return null;

	return (
		<div className={style.poopUp} onClick={closeWin} id='closeBTN'>
			<div className={style.window}>{children(componentId)}</div>
		</div>
	);
};

const mapStateToProps = state => {
	return { isOpen: state.poopUp.isOpen, componentId: state.poopUp.componentId };
};

export default connect(mapStateToProps, { closeOpen })(PoopUp);
