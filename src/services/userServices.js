import { authHeader } from '@/helpers';
import axios from 'axios';

export const userServices = {
	login,
	logout,
	register,
	getToken,
	getUserInfo,
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

function getToken() {
	const request_url = process.env.VUE_APP_API_URL + 'auth/jwt/verify/';
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
			// console.log(error);
			return refreshToken();
		});
}

function refreshToken() {
	const request_url = process.env.VUE_APP_API_URL + 'auth/jwt/refresh/';
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
			console.log(error);
			return Promise.reject('Неверный refresh.');
		});
}

async function getUserInfo() {
	const user_id = await getUserId();
	const request_url =
		process.env.VUE_APP_API_URL + 'api/v1/profiles/info/' + user_id + '/';
	const headers = await authHeader();
	return axios
		.get(request_url, { headers: headers })
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			console.log(error);
			return Promise.reject('Неверный id пользователя.');
		});
}

async function getUserId() {
	const request_url = process.env.VUE_APP_API_URL + 'auth/users/me/';
	const headers = await authHeader();
	return axios
		.get(request_url, { headers: headers })
		.then((response) => {
			const user_id = response.data.id;
			return user_id;
		})
		.catch((error) => {
			console.log(error);
			return Promise.reject('Неверный id пользователя.');
		});
}
