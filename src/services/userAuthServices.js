import axios from 'axios';

export const userAuthServices = {
	login,
	logout,
	register,
	getToken,
};

function register(email, username, password) {
	const request_url = process.env.VUE_APP_API_URL + 'users/';
	const request_body = {
		email,
		username,
		password,
	};
	return axios
		.post(request_url, request_body)
		.then((response) => {
			const user = response.data;
			return user;
		})
		.catch((error) => {
			console.log(error);
			return Promise.reject(error);
		});
}

function login(username, password) {
	const request_url = process.env.VUE_APP_API_URL + 'auth/token/';
	const request_body = {
		username,
		password,
	};
	return axios
		.post(request_url, request_body)
		.then((response) => {
			const user = response.data;
			if (user.access) {
				//! Сделать экспирацию
				localStorage.setItem('user', JSON.stringify(user));
			}
			return user;
		})
		.catch((error) => {
			return Promise.reject('Неверный логин или пароль.');
		});
}

function logout() {
	localStorage.removeItem('user');
}

function getToken() {
	const request_url = process.env.VUE_APP_API_URL + 'auth/token/verify/';
	let user = JSON.parse(localStorage.getItem('user'));
	const request_body = {
		token: user.access,
	};
	return axios
		.post(request_url, request_body)
		.then((response) => {
			return user.access;
		})
		.catch((error) => {
			return refreshToken();
		});
}

function refreshToken() {
	const request_url = process.env.VUE_APP_API_URL + 'auth/token/refresh/';
	let user = JSON.parse(localStorage.getItem('user'));
	const request_body = {
		refresh: user.refresh,
	};
	return axios
		.post(request_url, request_body)
		.then((response) => {
			user.access = response.data.access;
			if (user.access) {
				localStorage.setItem('user', JSON.stringify(user));
			}
			return user.access;
		})
		.catch((error) => {
			return Promise.reject('Неверный refresh.');
		});
}
