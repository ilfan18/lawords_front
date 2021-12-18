import { authHeader } from '@/helpers';
import axios from 'axios';

export const userInfoServices = {
	getUserInfo,
};

async function getUserInfo() {
	const request_url = process.env.VUE_APP_API_URL + 'users/me/';
	const headers = await authHeader();
	return axios
		.get(request_url, { headers: headers })
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			return Promise.reject('Неверный id пользователя.');
		});
}
