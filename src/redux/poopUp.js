const CLOSE_OPEN = 'CLOSE_OPEN';
const CHANGE_COMPONENT = 'CHANGE_COMPONENT';

const initialState = {
	isOpen: false,
	componentId: 0,
};

export const poopUp = (state = initialState, action) => {
	switch (action.type) {
		case CLOSE_OPEN:
			return { ...state, isOpen: !state.isOpen };
		case CHANGE_COMPONENT:
			return { ...state, componentId: action.componentId };
		default:
			return state;
	}
};

export const closeOpen = () => {
	return {
		type: CLOSE_OPEN,
	};
};

export const changeComponent = componentId => {
	return {
		type: CHANGE_COMPONENT,
		componentId,
	};
};
