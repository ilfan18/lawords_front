import axios from 'axios';

export const coursesModule = {
	namespaced: true,
	state: () => ({
		courses: [],
	}),
	mutations: {
		setCourses(state, courses) {
			state.courses = courses;
		},
	},
	actions: {
		async fetchCourses({ state, commit }) {
			try {
				const response = await axios.get(
					'http://localhost:8000/api/v1/courses/'
				);
				commit('setCourses', response.data);
			} catch (e) {
				console.log(e);
			}
		},
	},
};
