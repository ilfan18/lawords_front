import axios from 'axios';
import { coursesSirvices } from '@/services';
export const coursesModule = {
	namespaced: true,
	state: () => ({
		courses_list: [],
		currentLesson: null,
		isCoursesLoding: null,
		isCurrentLessonLoading: null,
		exerciseResult: {
			answeredExercises: 0,
			totalExercises: 0,
			score: 0,
			maxScore: 0,
		},
	}),
	actions: {
		fetchCourses({ commit, dispatch }) {
			commit('coursesLoding', true);
			coursesSirvices.getCoursesList().then(
				(data) => {
					commit('coursesLoding', false);
					commit('setCourses', data);
				},
				(error) => {}
			);
		},
		fetchCurrentLesson({ commit, dispatch, getters }, lessonId) {
			commit('currentLessonLoding', true);
			coursesSirvices.getLesson(lessonId).then(
				(data) => {
					commit('setCurrentLesson', data);
					commit('currentLessonLoding', false);
					dispatch('setExerciseResult', {
						totalExercises: getters.totalExercises,
						maxScore: getters.maxScore,
					});
				},
				(error) => {}
			);
		},
		setExerciseResult({ commit, dispatch }, result) {
			commit('setExerciseResult', result);
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
		currentLessonLoding(state, isLoading) {
			state.isCurrentLessonLoading = isLoading;
		},
		setExerciseResult(state, result) {
			state.exerciseResult = {
				...state.exerciseResult,
				...result,
			};
		},
	},
	getters: {
		totalExercises(state) {
			return state.currentLesson.exercises.length;
		},
		maxScore(state) {
			let maxScore = 0;
			state.currentLesson.exercises.forEach((exercise) => {
				let exerciseMaxScore = 0;
				exercise.answers.forEach((answer) => {
					if (answer.right) {
						exerciseMaxScore++;
					}
				});
				maxScore += exerciseMaxScore;
			});
			return maxScore;
		},
	},
};
