import {useNavigate} from 'react-router-dom';
import {connect, useDispatch} from 'react-redux';
import Card from './Card';
import {filterCards, orderList} from '../redux/actions';

function Favorite(props) {
	let navigate = useNavigate();

	let dispatch = useDispatch();

	let handleFilter = (e) => {
		dispatch(filterCards(e.target.value));
	};

	function handleOrder(e) {
		dispatch(orderList(e.target.value));
	}

	let goHome = () => {
		navigate('/home');
	};
	console.log(dispatch);

	return (
		<>
			<div>
				<select name="order" onChange={handleOrder}>
					<option value="Ascendiente">Ascende</option>
					<option value="Descendente" selected>
						Descendiente
					</option>
				</select>
				<select name="salec_caracter" onChange={handleFilter}>
					<option value="Male">Male</option>
					<option value="Female">Female</option>
					<option value="Gender">Gender</option>
					<option value="unknown">Desconocido</option>
				</select>
			</div>
			<button onClick={() => goHome()}>Home</button>
			<div>
				{props.Favorites.map((e) => (
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
		</>
	);
}

export function mapStateToProps(state) {
	return {
		Favorites: state.myFavorites,
	};
}

export default connect(mapStateToProps, null)(Favorite);
