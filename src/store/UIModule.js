export const UIModule = {
	namespaced: true,
	state: {
		theme: 'light',
	},
	actions: {
		setTheme({ commit }, theme) {
			commit('setTheme', theme);
		},
	},
	mutations: {
		setTheme(state, theme) {
			state.theme = theme;
		},
	},
};
