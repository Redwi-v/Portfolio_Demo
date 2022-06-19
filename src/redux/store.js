import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

//redusers
import { projectsList } from './projectsList';
import { adminpanel } from './adminpanel';
import { alert } from './alert';
import { poopUp } from './poopUp';

const redusers = combineReducers({
	projectsList,
	adminpanel,
	alert,
	poopUp,
});

const store = createStore(redusers, applyMiddleware(thunkMiddleware));
export default store;
window.store = store;
