let inicialState = {
	myFavorites: [],
	allCharacter: [],
};

function reducer(state = inicialState, action) {
	switch (action.type) {
		case 'ADD_CHARACTER':
			return {
				...state,
				allCharacter: [...state.myFavorites, action.payload],
				myFavorites: [...state.myFavorites, action.payload],
			};

		case 'DELETE_CHARACTER':
			return {
				...state,
				myFavorites: state.myFavorites.filter(
					(f) => f.detailId !== action.payload
				),
			};

		case 'FILTER':
			let favFil = state.allCharacter;
			if (action.payload !== 'All') {
				favFil.filter((p) => p.gener === action.payload);
			}

			return {
				...state,
				allCharacter: favFil,
			};

		case 'ORDER':
			let fav_order = state.allCharacter;

			if (action.payload === 'Ascendente') {
				fav_order.sort((a, b) => a.id - b.id);
			} else {
				fav_order.sort((a, b) => b.id - a.id);
			}

			return {
				...state,
				allCharacter: fav_order,
			};

		default:
			return state;
	}
}

export default reducer;
