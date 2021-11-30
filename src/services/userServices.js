import { authHeader } from '@/helpers';
import axios from 'axios';

export const userServices = {
	login,
	logout,
	register,
};

function register(email, username, password) {
	const request_url = process.env.VUE_APP_API_URL + 'auth/users/';
	const request_body = {
		email,
		username,
		password,
	};
	console.log(request_body);
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
	const request_url = process.env.VUE_APP_API_URL + 'auth/jwt/create/';
	const request_body = {
		username,
		password,
	};
	return axios
		.post(request_url, request_body)
		.then((response) => {
			const user = response.data;
			if (user.access) {
				localStorage.setItem('user', JSON.stringify(user));
			}
			return user;
		})
		.catch((error) => {
			console.log(error);
			return Promise.reject('Неверный логин или пароль.');
		});
}

function logout() {
	localStorage.removeItem('user');
}
