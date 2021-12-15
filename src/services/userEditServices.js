import { authHeader } from '@/helpers';
import axios from 'axios';

export const userEditServices = {
	emailEdit,
	usernameEdit,
	passwordEdit,
	userPropertyEdit,
};

async function emailEdit(email) {
	const request_url = process.env.VUE_APP_API_URL + 'auth/users/me/';
	const headers = await authHeader();
	const request_body = {
		email: email,
	};
	return axios
		.patch(request_url, request_body, { headers: headers })
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			console.log(error);
			return Promise.reject('Некорректный email.');
		});
}

async function usernameEdit(username_request) {
	const request_url =
		process.env.VUE_APP_API_URL + 'auth/users/set_username/';
	const headers = await authHeader();
	const request_body = username_request;
	console.log(request_body);
	return axios
		.post(request_url, request_body, { headers: headers })
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			console.log(error);
			return Promise.reject('Некорректный логин.');
		});
}

async function passwordEdit(new_password, current_password) {
	const request_url =
		process.env.VUE_APP_API_URL + 'auth/users/set_password/';
	const headers = await authHeader();
	const request_body = {
		new_password: new_password,
		current_password: current_password,
	};
	return axios
		.post(request_url, request_body, { headers: headers })
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			console.log(error);
			return Promise.reject('Некорректный пароль.');
		});
}
async function userPropertyEdit(property) {
	const request_url = process.env.VUE_APP_API_URL + 'auth/users/me/';
	const headers = await authHeader();
	const request_body = property;
	return axios
		.patch(request_url, request_body, { headers: headers })
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			console.log(error);
			return Promise.reject('Неверное свойство.');
		});
}
