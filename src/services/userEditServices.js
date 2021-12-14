import { authHeader } from '@/helpers';
import axios from 'axios';

export const userEditServices = {
	nameEdit,
	emailEdit,
	usernameEdit,
	passwordEdit,
};

async function nameEdit(first_name) {
	const request_url = process.env.VUE_APP_API_URL + 'auth/users/me/';
	const headers = await authHeader();
	const request_body = {
		first_name: first_name,
	};
	return axios
		.patch(request_url, request_body, { headers: headers })
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			console.log(error);
			return Promise.reject('Неверный id пользователя.');
		});
}
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

async function usernameEdit(username) {
	const request_url =
		process.env.VUE_APP_API_URL + 'auth/users/set_username/';
	const headers = await authHeader();
	const request_body = {
		new_username: username,
		// !Это убрать
		current_password: '123',
	};
	return axios
		.post(request_url, request_body, { headers: headers })
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			console.log(error);
			return Promise.reject('Некорректный email.');
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
			return Promise.reject('Некорректный email.');
		});
}
