import style from './navBar.module.scss';

import { NavLink } from 'react-router-dom';
import Input from '../Input/Input';

import searchIcon from '../../assets/icons/search.png';
import PoopUp from '../AdminPanel/PoopUp/PoopUp';
import { About } from '../Aside/Aside';

const NavBar = props => {
	const { search, openAboutPoopUp } = props;

	const renderAbout = () => {
		return <About style={style} />;
	};

	return (
		<div className={style.header}>
			<PoopUp children={renderAbout} />
			<nav className={style.navBar}>
				<ul className={style.nav_list}>
					<li>
						<button onClick={openAboutPoopUp} className={style.about_button}>
							обо мне
						</button>
					</li>
					<li>
						<NavLink to='/'>Главная</NavLink>
					</li>
				</ul>
			</nav>
			<div className={style.search_wraper}>
				<Input
					component='input'
					autoFocus={false}
					className={style.search}
					placeholder='Название проекта'
					submit={search}
				/>
				<img src={searchIcon} alt='' />
			</div>
		</div>
	);
};

export default NavBar;
