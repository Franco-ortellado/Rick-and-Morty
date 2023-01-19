import React, {useState} from 'react';
import {validate} from './validation';

function Forms(props) {
	const [userdata, setUserdata] = useState({
		username: '',
		password: '',
	});

	let [errors, setErrors] = useState({
		username: '',
		password: '',
	});

	let handleInputChange = (event) => {
		let property = event.target.name;
		let value = event.target.value;

		setErrors(
			validate({
				...userdata,
				[property]: value,
			})
		);

		setUserdata({
			...userdata,
			[property]: value,
		});
	};

	let handleSubmit = (event) => {
		event.preventDefault();
		props.login(userdata);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor="username">Username</label>
				<input
					type="text"
					name="username"
					value={userdata.username}
					onChange={handleInputChange}
				/>
				<p className="danger">{errors.username}</p>
				<label htmlFor="password">Password</label>
				<input
					type="password"
					name="password"
					value={userdata.password}
					onChange={handleInputChange}
				/>
				<p className="danger">{errors.password}</p>
				<button type="submit">LOGIN</button>
			</form>
		</div>
	);
}

export default Forms;
