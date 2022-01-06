import axios from 'axios';
import { coursesSirvices } from '@/services';
import { getCookie, setCookie } from '@/helpers';

const defaultlastLessons = getCookie('last_lessons')
	? getCookie('last_lessons').split(',')
	: [];

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
		lastLessons: defaultlastLessons,
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
					dispatch('setLastLesson', data.id);
				},
				(error) => {}
			);
		},
		setExerciseResult({ commit, dispatch }, result) {
			commit('setExerciseResult', result);
		},
		setLastLesson({ commit, dispatch }, lesson_id) {
			let lessons = [];
			if (getCookie('last_lessons')) {
				lessons = lessons.concat(getCookie('last_lessons').split(','));
			}
			lessons.unshift(String(lesson_id));
			lessons = [...new Set(lessons)];
			lessons = lessons.slice(0, 3);
			setCookie('last_lessons', lessons);
			commit('setLastLessons', lessons);
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
		setLastLessons(state, lessons) {
			state.lastLessons = lessons;
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
