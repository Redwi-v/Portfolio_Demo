import style from './projectConstruktor.module.scss';
import shareIcon from '../../../assets/icons/share.svg';

import Text from '../Text/Text';
import Input from '../../Input/Input';

import ConstructorImage from '../ConstructorImage/ConstructorImage';
import Alert from '../../Alert/Alert';
import PoopUp from '../PoopUp/PoopUp';
import Tags from '../Tags/Tags';

const ProjectConstruktor = props => {
	const {
		state,
		isSending,
		// functions
		changeText,
		changeTitle,
		changeImage,
		addNewValue,
		sendProject,
		changeTags,
		closeOpen,
		changeGitHubLink,
		changeComponent,
		changePrevImage,
		sendProjectOnServer,
	} = props;
	const renderInfo = state.info.map((el, index) => {
		let submit = null;

		switch (el.type) {
			case 'text':
				submit = newText => {
					changeText(index, newText);
				};

				return (
					<li key={index} id={index}>
						<Text el={el} submit={submit} />
					</li>
				);
			case 'image':
				return (
					<li key={index} id={index}>
						<ConstructorImage
							className={style.image_input}
							information={el.information}
							alt={el.alt}
							changeImage={changeImage}
							index={index}
							submit={submit}
						/>
					</li>
				);
			default:
				break;
		}
	});

	const renderTags = state.tags.map((tag, index) => {
		return (
			<li className={style.tag} key={index}>
				{tag.name}
			</li>
		);
	});

	//рендерит выбраную компоненту в PoopUp
	const popUpController = componentId => {
		switch (componentId) {
			case 0:
				return <Tags changeTags={changeTags} selectedTags={state.tags} />;
			case 1:
				return (
					<div className={style.gitPoopUp}>
						<h2 className={style.gitTitle}>Enter your gitHub link</h2>
						<Input className={style.gitLinkInput} component={'input'} submit={changeGitHubLink} />
					</div>
				);
			case 2:
				const image = state.prevImage[0].information;

				return (
					<div className={style.gitPoopUp}>
						<h2 className={style.gitTitle}>Enter your prev image</h2>
						<ConstructorImage className={style.prevImage} changeImage={changePrevImage} information={image} />
						<button
							className={style.sendButton}
							onClick={sendProjectOnServer}
							disabled={!image}>{`Send Projec "${state.title}"`}</button>
					</div>
				);
			default:
				break;
		}
	};

	// RENDER
	return (
		<div className={style.container}>
			<Alert />
			<PoopUp>{popUpController}</PoopUp>
			<div className={`${style.loagdin_scrееn} ${isSending ? style.sending : ''}`}>
				<span>Loading...</span>
			</div>

			<div className={`${style.project} card`}>
				<div className={style.interactio}>
					<p>вернуться назад</p>
					<button>
						поделиться <img src={shareIcon} alt='icon' />
					</button>
				</div>
				<div className={style.info}>
					<h1 className={style.title}>
						<Text el={{ information: state.title }} submit={changeTitle} />
					</h1>
					<div className={style.date}>{state.date}</div>
				</div>
				<ul className={style.mainInfo}>{renderInfo}</ul> {/* Main Info */}
				<ul className={style.tags_list}>{renderTags}</ul> {/* Tags */}
				<a className={style.github}>{state.gitHubLink}</a> {/* Link */}
				<div className={style.controls}>
					<button
						onClick={() => {
							addNewValue('text');
						}}>
						Add text
					</button>
					<button
						onClick={() => {
							addNewValue('image');
						}}>
						Add image
					</button>
					<button
						onClick={() => {
							changeComponent(0);

							closeOpen();
						}}>
						Choose tags
					</button>
					<button
						onClick={() => {
							changeComponent(1);
							closeOpen();
						}}>
						Add GitHub link
					</button>
				</div>
			</div>
			<button onClick={sendProject} className={style.sendButton}>
				Send Project
			</button>
		</div>
	);
};

export default ProjectConstruktor;
