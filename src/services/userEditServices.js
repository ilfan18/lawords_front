import { authHeader } from '@/helpers';
import axios from 'axios';

export const userEditServices = {
	emailEdit,
	usernameEdit,
	passwordEdit,
	userPropertyEdit,
	imageEdit,
};

async function emailEdit(email) {
	const requestUrl = process.env.VUE_APP_API_URL + 'auth/users/me/';
	const headers = await authHeader();
	const requestBody = {
		email: email,
	};
	return axios
		.patch(requestUrl, requestBody, { headers: headers })
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			console.log(error);
			return Promise.reject('Некорректный email.');
		});
}

async function usernameEdit(username_request) {
	const requestUrl = process.env.VUE_APP_API_URL + 'auth/users/set_username/';
	const headers = await authHeader();
	const requestBody = username_request;
	return axios
		.post(requestUrl, requestBody, { headers: headers })
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			console.log(error);
			return Promise.reject('Некорректный логин.');
		});
}

async function passwordEdit(new_password, current_password) {
	const requestUrl = process.env.VUE_APP_API_URL + 'auth/users/set_password/';
	const headers = await authHeader();
	const requestBody = {
		new_password: new_password,
		current_password: current_password,
	};
	return axios
		.post(requestUrl, requestBody, { headers: headers })
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			console.log(error);
			return Promise.reject('Некорректный пароль.');
		});
}
async function userPropertyEdit(property) {
	const requestUrl = process.env.VUE_APP_API_URL + 'auth/users/me/';
	const headers = await authHeader();
	const requestBody = property;
	return axios
		.patch(requestUrl, requestBody, { headers: headers })
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			console.log(error);
			return Promise.reject('Неверное свойство.');
		});
}

async function imageEdit(image_file) {
	const requestUrl = process.env.VUE_APP_API_URL + 'auth/users/me/';
	const headers = await authHeader();
	headers['Content-Type'] = 'multipart/form-data';
	const requestBody = new FormData();
	requestBody.append('image', image_file);
	return axios
		.patch(requestUrl, requestBody, { headers: headers })
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			console.log(error);
			return Promise.reject('Неверное свойство.');
		});
}
