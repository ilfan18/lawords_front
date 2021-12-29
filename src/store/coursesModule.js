import axios from 'axios';
import { coursesSirvices } from '@/services';
export const coursesModule = {
	namespaced: true,
	state: () => ({
		courses_list: [],
		currentLesson: null,
		isCoursesLoding: false,
		isLessonLoading: false,
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
		fetchLesson({ state, commit }, lessonId) {
			coursesSirvices.getLesson(lessonId).then(
				(data) => {
					commit('coursesLoding', false);
					commit('setCurrentLesson', data);
				},
				(error) => {}
			);
		},
	},
	mutations: {
		setCourses(state, courses) {
			state.courses_list = courses;
		},
		setCurrentLesson(state, lesson) {
			state.currentLesson = lesson;
		},
		coursesLoding(state, isLoading) {
			state.isCoursesLoding = isLoading;
		},
		lessonLoding(state, isLoading) {
			state.isLessonLoading = isLoading;
		},
	},
};
