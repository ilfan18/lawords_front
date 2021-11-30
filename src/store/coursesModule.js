import axios from 'axios';
import { authHeader } from '@/helpers';

export const coursesModule = {
	namespaced: true,
	state: () => ({
		courses_list: [],
	}),
	actions: {
		async fetchCourses({ state, commit }) {
			const headers = await authHeader();
			const response = await axios.get(
				process.env.VUE_APP_API_URL + 'api/v1/courses/',
				{
					headers: headers,
				}
			);
			commit('setCourses', response.data);
		},
	},
	mutations: {
		setCourses(state, courses) {
			state.courses_list = courses;
		},
	},
};
