export let validate = (inputs) => {
	let errors = {};
	const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
	const passwordRegex = /^(?=.*\d)[a-zA-Z\d]{6,10}$/;

	if (!regexEmail.test(inputs.username)) {
		errors.username = 'Debe ser un correo electrónico';
	}
	if (!passwordRegex.test(inputs.password)) {
		errors.password =
			'la contraseña tiene que tener al menos un número y tiene que tener una longitud entre 6 y 10 caracteres.';
	}

	return errors;
};
