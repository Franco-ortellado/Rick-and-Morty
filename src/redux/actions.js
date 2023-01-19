export let addCharacter = (character) => {
	return {type: 'ADD_CHARACTER', payload: character};
};

export let deleteCharacter = (id) => {
	return {type: 'DELETE_CHARACTER', payload: id};
};

export let filterCards = (gender) => {
	return {type: 'FILTER', payload: gender};
};

export let orderList = (order) => {
	return {type: 'ORDER', payload: order};
};
