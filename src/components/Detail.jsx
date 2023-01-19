import React, {useState} from 'react';
import {useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';

function Detail() {
	let {detailId} = useParams();
	let navigate = useNavigate();

	let [character, setCharacter] = useState({});

	useEffect(() => {
		fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
			.then((response) => response.json())
			.then((char) => {
				if (char.name) {
					setCharacter(char);
				} else {
					window.alert('No hay personajes con ese ID');
				}
			})
			.catch((err) => {
				window.alert('No hay personajes con ese ID');
			});
		return setCharacter({});
	}, [detailId]);

	let goHome = () => {
		navigate('/home');
	};

	return (
		<div>
			<img src={character.image} alt={character.name}></img>
			<h1>Nombre: {character.name}</h1>
			<h3>Status: {character.status}</h3>
			<h3>Genero: {character.gender}</h3>
			{<h3>Origen: {character.origin?.name}</h3>}
			<button onClick={() => goHome()}>Home</button>
		</div>
	);
}

export default Detail;
