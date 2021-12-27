import { authHeader } from '@/helpers';
import axios from 'axios';

export const userEditServices = {
	emailEdit,
	usernameEdit,
	passwordEdit,
	userPropertyEdit,
	imageEdit,
	emailConfirm,
	emailResendActivation,
};

async function emailEdit(email) {
	const requestUrl = process.env.VUE_APP_API_URL + 'users/me/';
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
			return Promise.reject(error.response.data.email[0]);
		});
}

async function usernameEdit(username_request) {
	const requestUrl = process.env.VUE_APP_API_URL + 'users/me/set_username/';
	const headers = await authHeader();
	const requestBody = username_request;
	return axios
		.post(requestUrl, requestBody, { headers: headers })
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			return Promise.reject(error.response.data);
		});
}

async function passwordEdit(new_password, current_password) {
	// ! Исправить url
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
	const requestUrl = process.env.VUE_APP_API_URL + 'users/me/';
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

function emailConfirm(request) {
	const requestUrl = process.env.VUE_APP_API_URL + 'users/activate/';
	const requestBody = request;
	return axios
		.post(requestUrl, requestBody)
		.then((response) => {
			return response;
		})
		.catch((error) => {
			console.log(error);
			return Promise.reject('Неверное свойство.');
		});
}

function emailResendActivation(uid) {
	const requestUrl = process.env.VUE_APP_API_URL + 'users/resend/';
	const requestBody = {
		uid: uid,
	};
	return axios
		.post(requestUrl, requestBody)
		.then((response) => {
			return response;
		})
		.catch((error) => {
			return Promise.reject('Неверный uid.');
		});
}

async function imageEdit(imageFile, onProgress) {
	const requestUrl = process.env.VUE_APP_API_URL + 'users/me/';
	const headers = await authHeader();
	headers['Content-Type'] = 'multipart/form-data';
	const config = {
		headers: headers,
		onUploadProgress: function (progressEvent) {
			const percentCompleted = Math.round(
				(progressEvent.loaded * 100) / progressEvent.total
			);

			onProgress(percentCompleted);

			return percentCompleted;
		},
	};
	const requestBody = new FormData();
	requestBody.append('image', imageFile);
	return axios
		.patch(requestUrl, requestBody, config)
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			console.log(error);
			return Promise.reject('Неверное свойство.');
		});
}
