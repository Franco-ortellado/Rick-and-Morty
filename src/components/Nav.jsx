import React from 'react';
import SearchBar from './SearchBar';
import {Link} from 'react-router-dom';

function Nav(props) {
	return (
		<div>
			<ul>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/home">Home</Link>
				</li>
				<li>
					<Link to="/favorite">Favorite</Link>
				</li>
			</ul>
			<SearchBar onSearch={props.onSearch} />
		</div>
	);
}

export default Nav;
