import style from './alert.module.scss';

const Alert = props => {
	const { alertText, color, isOpen } = props;
	const changeColor = () => {
		switch (color) {
			case 'red':
				return style.red;
			case 'yellow':
				return style.yellow;
			case 'green':
				return style.green;
			default:
				return '';
		}
	};

	return (
		<div className={`${changeColor()} ${style.alert} ${isOpen && style.open}`}>
			<p className={style.alertText}>{alertText}</p>
		</div>
	);
};

export default Alert;
