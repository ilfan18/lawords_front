import axios from 'axios';

export const coursesModule = {
	namespaced: true,
	state: () => ({
		courses_list: [],
	}),
	actions: {
		async fetchCourses({ state, commit }) {
			try {
				const response = await axios.get(
					process.env.VUE_APP_API_URL + 'api/v1/courses/'
				);
				commit('setCourses', response.data);
			} catch (e) {
				console.log(e);
			}
		},
	},
	mutations: {
		setCourses(state, courses) {
			state.courses_list = courses;
		},
	},
};
