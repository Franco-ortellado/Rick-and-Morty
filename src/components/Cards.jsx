import Card from './Card';

export default function Cards(props) {
	const {characters} = props;
	return (
		<div>
			{characters.map((e) => (
				<Card
					species={e.species}
					gender={e.gender}
					name={e.name}
					image={e.image}
					onClose={props.onClose}
					detailId={e.id}
				/>
			))}
		</div>
	);
}
