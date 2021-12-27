export const alertModule = {
	namespaced: true,
	state: {
		type: null,
		message: null,
		email_edit: null,
		username_edit: {
			new_username: null,
			current_password: null,
		},
		password_edit: {
			new_password: null,
			current_password: null,
		},
	},
	actions: {
		success({ commit }, message) {
			commit('success', message);
		},
		error({ commit }, message) {
			commit('error', message);
		},
		clear({ commit }) {
			commit('clear');
		},
		emailEditAlertSet({ commit }, alert) {
			commit('emailEditAlertSet', alert);
		},
		usernameEditAlertSet({ commit }, alert) {
			commit('usernameEditAlertSet', alert);
		},
		passwordEditAlertSet({ commit }, alert) {
			commit('passwordEditAlertSet', alert);
		},
	},
	mutations: {
		success(state, message) {
			state.type = 'alert-success';
			state.message = message;
		},
		error(state, message) {
			state.type = 'alert-danger';
			state.message = message;
		},
		clear(state) {
			state.type = null;
			state.message = null;
			state.email_edit = null;
			state.username_edit = {
				new_username: null,
				current_password: null,
			};
		},
		emailEditAlertSet(state, alert) {
			state.email_edit = alert;
		},
		usernameEditAlertSet(state, alert) {
			state.username_edit = alert;
		},
		passwordEditAlertSet(state, alert) {
			state.password_edit = alert;
		},
	},
};
