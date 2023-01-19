import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import {useState, useEffect} from 'react';
import {Route, Routes, useNavigate, useLocation} from 'react-router-dom';
import About from './components/About';
import Detail from './components/Detail';
import Forms from './components/Form';
import Favorite from './components/Favorites';
// import Card from './components/Card.jsx';
// import SearchBar from './components/SearchBar.jsx';

function App() {
	let location = useLocation();

	let navigate = useNavigate();
	///////////////////////

	let [access, setAccess] = useState(false);

	let username = 'ortellado.frank@gmail.com';
	let password = 'asdfg1';

	/////////////////////////////////

	function login(userdata) {
		if (userdata.password === password && userdata.username === username) {
			setAccess(true);
			navigate('/home');
		}
	}

	useEffect(() => {
		!access && navigate('/');
	}, [access]);

	////////////////////////

	let [characters, setCharacters] = useState([]);
	////////////////////////

	function onSearch(character) {
		fetch(`https://rickandmortyapi.com/api/character/${character}`)
			.then((response) => response.json())
			.then((data) => {
				if (data.name) {
					if (!characters.find((char) => char.name === data.name)) {
						// Si el personaje no existe, lo añadimos al set
						setCharacters((oldChars) => [...oldChars, data]);
						navigate('/home');
					} else {
						// Si el personaje ya existe, mostramos un mensaje de alerta
						window.alert('Ese personaje ya está en la lista');
					}
				} else {
					window.alert('No hay personajes con ese ID');
				}
			});
	}

	//////////////////////
	function onClose(deleteName) {
		setCharacters(
			characters.filter((character) => character.name !== deleteName)
		);
	}

	///////////////////////

	return (
		<div className="App" style={{padding: '25px'}}>
			{location.pathname !== '/' && <Nav onSearch={onSearch}></Nav>}
			<Routes className="routes">
				<Route path="/" element={<Forms login={login} />}></Route>
				<Route
					path="/home"
					element={
						<Cards characters={characters} onClose={onClose} />
					}
				></Route>
				<Route path="/detail/:detailId" element={<Detail />}></Route>
				<Route path="/about" element={<About />}></Route>
				<Route path="/favorite" element={<Favorite />}></Route>
			</Routes>
		</div>
	);
}

export default App;
