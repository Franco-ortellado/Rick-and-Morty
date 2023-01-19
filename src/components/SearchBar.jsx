import {useState} from 'react';

export default function SearchBar(props) {
	let [id, setId] = useState('');

	let handleChange = (e) => {
		setId(e.target.value);
	};

	/////////////////
	let handleSubmit = (event) => {
		event.preventDefault();
	};
	///////////

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input type="search" id="" onChange={handleChange} />
				<button
					type="submit"
					onClick={() => props.onSearch(id)}
					placeholder="..."
				>
					Agregar
				</button>
			</form>
		</div>
	);
}
