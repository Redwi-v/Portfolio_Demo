const CHANGE_ALERT_CONDITION = 'CHANGE_ALERT_CONDITION';
const CHANGE_ALERT_TEXT = 'CHANGE_ALERT_TEXT';
const CHANGE_ALERT_COLOR = 'CHANGE_ALERT_COLOR';

const initialState = {
	isOpen: false,
	text: 'Alert Text',
	color: null,
};

export const alert = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_ALERT_CONDITION:
			return { ...state, isOpen: action.isOpen };
		case CHANGE_ALERT_TEXT:
			return { ...state, text: action.text };
		case CHANGE_ALERT_COLOR:
			return { ...state, color: action.color };
		default:
			return state;
	}
};

//AC
export const changeAlertCondition = condition => {
	return {
		type: CHANGE_ALERT_CONDITION,
		isOpen: condition,
	};
};

export const changeAlertText = text => {
	return {
		type: CHANGE_ALERT_TEXT,
		text,
	};
};

export const changeAlertColor = color => {
	return {
		type: CHANGE_ALERT_COLOR,
		color,
	};
};

//thunks
export const changeAlert = params => dispatch => {
	dispatch(changeAlertText(params.text));
	dispatch(changeAlertColor(params.color));
	dispatch(changeAlertCondition(true));

	setTimeout(() => {
		dispatch(changeAlertCondition(false));
	}, params.timeout || 3000);
};
