import { getCookie, setCookie } from '@/helpers';
const default_theme = getCookie('theme') ? getCookie('theme') : 'light';
export const UIModule = {
	namespaced: true,
	state: {
		theme: default_theme,
		rightPanelVisible: false,
		rightPanelCourseInfoVisible: false,
		rightPanelLessonsListVisible: false,
		rightPanelExerciseInfoVisible: false,
		uploadImageModalVisible: false,
		courseInfo: null,
	},
	actions: {
		setTheme({ commit }, theme) {
			let expires = new Date(Date.now() + 86400e3 * 7);
			expires = expires.toUTCString();
			setCookie('theme', theme, { samesite: true, expires: expires });
			commit('setTheme', theme);
		},
		showRightPanel({ commit }) {
			commit('showRightPanel');
		},
		hideRightPanel({ commit }) {
			commit('hideRightPanel');
		},
		showRightPanelCourseInfo({ commit }) {
			commit('setRightPanelCourseInfo', true);
		},
		hideRightPanelCourseInfo({ commit }) {
			commit('setRightPanelCourseInfo', false);
		},
		setCourseInfo({ commit }, course) {
			commit('setCourseInfo', course);
		},
		showRightPanelLessonsList({ commit }) {
			commit('setRightPanelLessonsList', true);
		},
		hideRightPanelLessonsList({ commit }) {
			commit('setRightPanelLessonsList', false);
		},
		showRightPanelExerciseInfo({ commit }) {
			commit('setRightPanelExerciseInfo', true);
		},
		hideRightPanelExerciseInfo({ commit }) {
			commit('setRightPanelExerciseInfo', false);
		},
		showUploadImageModal({ commit }) {
			commit('setUploadImageModal', true);
		},
		hideUploadImageModal({ commit }) {
			commit('setUploadImageModal', false);
		},
	},
	mutations: {
		setTheme(state, theme) {
			state.theme = theme;
		},
		showRightPanel(state) {
			state.rightPanelVisible = true;
		},
		hideRightPanel(state) {
			state.rightPanelVisible = false;
			state.rightPanelCourseInfoVisible = false;
			state.rightPanelLessonsListVisible = false;
			state.rightPanelExerciseInfoVisible = false;
			state.courseInfo = false;
		},
		setRightPanelCourseInfo(state, visibility) {
			state.rightPanelCourseInfoVisible = visibility;
		},
		setCourseInfo(state, course) {
			state.courseInfo = course;
		},
		setRightPanelLessonsList(state, visibility) {
			state.rightPanelLessonsListVisible = visibility;
		},
		setRightPanelExerciseInfo(state, visibility) {
			state.rightPanelExerciseInfoVisible = visibility;
		},
		setUploadImageModal(state, visibility) {
			state.uploadImageModalVisible = visibility;
		},
	},
};
