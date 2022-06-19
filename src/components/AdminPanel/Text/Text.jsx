import Input from '../../Input/Input';
import { useState } from 'react';
import style from './Text.module.scss';

const Text = props => {
	const { el, submit } = props;

	const [textState, setTextState] = useState({
		isReductMode: false,
	});

	const reduct = () => {
		setTextState({ ...textState, isReductMode: true });
	};

	const onBlur = values => {
		setTextState({ ...textState, isReductMode: false });
		submit(values.inputText);
	};

	return (
		<div>
			{textState.isReductMode ? (
				<Input text={el.information} submit={onBlur} />
			) : (
				<p className={style.text} onDoubleClick={reduct}>
					{el.information.trim().length ? el.information : 'your text'}
				</p>
			)}
		</div>
	);
};

export default Text;
