import axios from 'axios';
import { authHeader } from '@/helpers';

export const coursesSirvices = {
	getCoursesList,
	getLesson,
};

async function getCoursesList() {
	const requestUrl = process.env.VUE_APP_API_URL + 'api/v1/courses/';
	const headers = await authHeader();
	return axios
		.get(requestUrl, { headers: headers })
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			return Promise.reject(error.response.data);
		});
}
