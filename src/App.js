import Aside from './components/Aside/Aside';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProjectsListContainer from './components/ProjectsLIst/ProjectsListContainer';
import ProjectContainer from './components/Project/ProjectContainer';
import AdminPanelContainer from './components/AdminPanel/AdminPanelContainer';
import AlertContainer from './components/Alert/AlertContainer';
import NavBarContainer from './components/NavBar/NavBarContainer';

function App() {
	return (
		<div>
			<AlertContainer />
			<Routes className='routes'>
				<Route path='*' element={<MainApp />} />
				<Route path={`:page/admin/*`} element={<AdminPanelContainer />} />
				<Route path={`/admin/*`} element={<AdminPanelContainer />} />
			</Routes>
		</div>
	);
}

function MainApp(props) {
	return (
		<div className='App'>
			<Aside />

			<div className='rigth-side'>
				<NavBarContainer />

				<div className='main'>
					<Routes>
						<Route path=':page/*' element={<ProjectsListContainer />} />
						<Route path='/project/:id' element={<ProjectContainer />} />
						<Route path='*' element={<Navigate to={`:page`} replace='true' />} />
					</Routes>
				</div>
			</div>
		</div>
	);
}

export default App;
