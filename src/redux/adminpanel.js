import auth from '../API/auth';
import { changeAlert } from './alert';
import projectsApi from '../API/projects';

const SET_TOKEN = 'SET_TOKEN';
const SWITCH_SENDING = 'SWITCH_SENDING';

const initialState = {
	token: sessionStorage.getItem('token') || null,
	isSending: false,
};

export const adminpanel = (state = initialState, action) => {
	switch (action.type) {
		case SET_TOKEN:
			return { ...state, token: action.token };
		case SWITCH_SENDING:
			return { ...state, isSending: !state.isSending };
		default:
			return state;
	}
};

//AC
const setToken = token => {
	return {
		type: SET_TOKEN,
		token,
	};
};

const switchSending = () => {
	return {
		type: SWITCH_SENDING,
	};
};

//thunks
export const login = (adminname, passwod) => async dispatch => {
	try {
		const token = await auth.login(adminname, passwod);
		dispatch(setToken(token));
		sessionStorage.setItem('token', token);
	} catch (error) {
		const params = {
			text: 'incorrect admin name or password',
			color: 'red',
			isOpen: true,
		};

		dispatch(changeAlert(params));

		setTimeout(() => {
			dispatch(
				changeAlert({
					isOpen: false,
				}),
			);
		}, 3000);
	}
};

// c авторизацией

export const sendProjectOnServer = (project, token) => async dispatch => {
	dispatch(switchSending());
	await projectsApi.sendProject(project, token);
	dispatch(switchSending());
};
