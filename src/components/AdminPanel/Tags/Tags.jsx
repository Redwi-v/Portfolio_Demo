import style from './tags.module.scss';

const Tags = props => {
	const { tagsLIst, changeTags, selectedTags = [] } = props;

	const tags = [
		{
			name: 'Scss',
		},
		{
			name: 'React',
		},
		{
			name: 'Html 5',
		},
		{
			name: 'Redux',
		},
		{
			name: 'Css 3',
		},
		{
			name: 'JS',
		},
		{
			name: 'Formik',
		},
		{
			name: 'Axios',
		},
		{
			name: 'Webpack + gulp',
		},
	];

	const renderItems = tags.map(tag => {
		let isSelected = false;

		selectedTags.forEach(selectedTag => {
			if (selectedTag.name === tag.name) isSelected = true;
		});

		return (
			<li
				className={`${style.tag} ${isSelected ? style.selected : ''}`}
				key={tag.name}
				onClick={() => {
					changeTags(tag.name);
				}}>
				{tag.name}
			</li>
		);
	});

	return <ul className={style.tagsList}>{renderItems}</ul>;
};

export default Tags;
