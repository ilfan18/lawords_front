import { authHeader } from '@/helpers';
import axios from 'axios';

export const userEditServices = {
	editName,
};

async function editName(first_name) {
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
