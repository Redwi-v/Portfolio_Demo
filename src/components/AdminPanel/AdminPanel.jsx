import { Route, Routes, useLocation } from 'react-router-dom';
import style from './adminPanel.module.scss';

import LoginForm from './LoginForm/LoginForm';
import ManageBoardContayner from './_ManageBoard/ManageBoardContayner';
import ProjectConstruktorContainer from './_ProjectConstruktor/ProjectConstruktorContainer';

const AdminPanel = props => {
	const { submitform, token } = props;

	// REMOVE leater

	if (true) {
		return (
			<Routes>
				<Route path='*' element={<ProjectConstruktorContainer />} />
				<Route path='/:projectId/*' element={<ProjectConstruktorContainer />} />
				<Route path={`/:projectId/manage/:page`} element={<ManageBoardContayner />} />
				<Route path={`/manage/:page`} element={<ManageBoardContayner />} />
				<Route path={`/manage`} element={<ManageBoardContayner />} />
				<Route path={`/:projectId/manage/`} element={<ManageBoardContayner />} />
			</Routes>
		);
	}
	return (
		<div className=''>
			<h1 className={style.title}>Hi Admin</h1>
			<LoginForm submitForm={submitform} />
		</div>
	);
};

export default AdminPanel;
