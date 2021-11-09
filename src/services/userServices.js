import { authHeader } from '@/helpers';
import axios from 'axios';

export const userServices = {
	login,
	logout,
};

function login(username, password) {
	const request_url = process.env.VUE_APP_API_URL + 'auth/jwt/create/';
	const request_body = {
		username,
		password,
	};
	return axios
		.post(request_url, request_body)
		.then(handleResponse)
		.then((user) => {
			if (user.access) {
				localStorage.setItem('user', JSON.stringify(user));
			}
			return user;
		})
		.catch((error) => {
			console.log(error);
			return Promise.reject(error);
		});
}

function logout() {
	localStorage.removeItem('user');
}

function handleResponse(response) {
	const data = response.data;
	if (response.status != 200) {
		if (response.status == 401) {
			logout();
			location.reload(true);
		}
		const error = (data && data.message) || response.statusText;
		return Promise.reject(error);
	}
	return data;
}
