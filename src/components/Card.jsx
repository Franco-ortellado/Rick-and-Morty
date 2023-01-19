import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {addCharacter, deleteCharacter} from '../redux/actions';
import style from './Card.module.css';

function Card(props) {
	const [isFav, setIsFav] = useState(false);

	useEffect(() => {
		props.myFavorites.forEach((fav) => {
			if (fav.detailId === props.detailId) {
				setIsFav(true);
			}
		});
	}, [props.myFavorites]);

	function handleFavorite() {
		if (isFav) {
			setIsFav(false);
			props.deleteCharacter(props.detailId);
		} else {
			setIsFav(true);
			props.addCharacter(props);
		}
	}

	return (
		<div className={style.card}>
			{isFav ? (
				<button onClick={handleFavorite}>❤️</button>
			) : (
				<button onClick={handleFavorite}>🤍</button>
			)}
			<button
				onClick={() => props.onClose(props.name)}
				className={style.closeButton}
			>
				X
			</button>
			<Link to={`/detail/${props.detailId}`}>
				<h2 className={style.name}>{props.name}</h2>
				<img src={props.image} alt="" />
			</Link>
			<div className={style.dato}>
				<h2>{props.species}</h2>
				<hr />
				<h2>{props.gender}</h2>
			</div>
		</div>
	);
}

export function mapStateToProps(state) {
	return {
		myFavorites: state.myFavorites,
	};
}

export function mapDispatchToProps(dispatch) {
	return {
		addCharacter: (character) => dispatch(addCharacter(character)),
		deleteCharacter: (id) => dispatch(deleteCharacter(id)),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
