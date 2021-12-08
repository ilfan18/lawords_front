import { authHeader } from '@/helpers';
import axios from 'axios';

export const userInfoServices = {
	getUserInfo,
};

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
