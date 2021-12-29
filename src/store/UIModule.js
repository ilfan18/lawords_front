import { getCookie, setCookie } from '@/helpers';
const default_theme = getCookie('theme') ? getCookie('theme') : 'light';
export const UIModule = {
	namespaced: true,
	state: {
		theme: default_theme,
		rightPanelVisible: false,
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
			commit('setRightPanel', true);
		},
		hideRightPanel({ commit }) {
			commit('setRightPanel', false);
		},
		showCourseInfo({ commit }, course) {
			commit('setCourseInfo', course);
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
		setCourseInfo(state, course) {
			state.courseInfo = course;
		},
		setUploadImageModal(state, visibility) {
			state.uploadImageModalVisible = visibility;
		},
	},
};
