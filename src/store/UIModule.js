import { getCookie, setCookie } from '@/helpers';
const default_theme = getCookie('theme') ? getCookie('theme') : 'light';
export const UIModule = {
	namespaced: true,
	state: {
		theme: default_theme,
		right_panel_visible: false,
		course_info_id: null,
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
		showCourseInfo({ commit }, course_id) {
			commit('setCourseInfoId', course_id);
		},
		hideRightPanel({ commit }) {
			commit('setRightPanel', false);
		},
	},
	mutations: {
		setTheme(state, theme) {
			state.theme = theme;
		},
		setRightPanel(state, visibility) {
			state.right_panel_visible = visibility;
		},
		setCourseInfoId(state, course_id) {
			state.course_info_id = course_id;
		},
	},
};
