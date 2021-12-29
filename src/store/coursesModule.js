import axios from 'axios';
import { coursesSirvices } from '@/services';
export const coursesModule = {
	namespaced: true,
	state: () => ({
		courses_list: [],
		isCoursesLoding: false,
	}),
	actions: {
		fetchCourses({ state, commit }) {
			commit('coursesLoding', true);
			coursesSirvices.getCoursesList().then(
				(data) => {
					commit('coursesLoding', false);
					commit('setCourses', data);
				},
				(error) => {}
			);
		},
	},
	mutations: {
		setCourses(state, courses) {
			state.courses_list = courses;
		},
		coursesLoding(state, isLoading) {
			state.isCoursesLoding = isLoading;
		},
	},
};
