import { getCookie, setCookie } from '@/helpers';
const default_theme = getCookie('theme') ? getCookie('theme') : 'light';
export const UIModule = {
	namespaced: true,
	state: {
		theme: default_theme,
		rightPanelVisible: false,
		uploadImageModalVisible: false,
		courseInfoId: null,
	},
	actions: {
		setTheme({ commit }, theme) {
			let expires = new Date(Date.now() + 86400e3 * 7);
			expires = expires.toUTCString();
			setCookie('theme', theme, { samesite: true, expires: expires });
			commit('setTheme', theme);
		},
		showRightPanel({ commit }) {
			commit('setRightPanel', true);
		},
		hideRightPanel({ commit }) {
			commit('setRightPanel', false);
		},
		showCourseInfo({ commit }, course_id) {
			commit('setCourseInfoId', course_id);
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
		setRightPanel(state, visibility) {
			state.rightPanelVisible = visibility;
		},
		setCourseInfoId(state, course_id) {
			state.courseInfoId = course_id;
		},
		setUploadImageModal(state, visibility) {
			state.uploadImageModalVisible = visibility;
		},
	},
};
