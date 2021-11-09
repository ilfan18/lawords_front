import { userServices } from '@/services';
import router from '@/router';

const user = JSON.parse(localStorage.getItem('item'));
const initialState = user
	? { status: { loggedIn: true }, user }
	: { status: {}, user: null };

export const authModule = {
	namespaced: true,
	state: initialState,
	actions: {
		login({ dispatch, commit }, { username, password }) {
			commit('loginRequest', { username });
			userServices.login(username, password).then(
				(user) => {
					commit('loginSuccess', user);
					router.push('/');
				},
				(error) => {
					commit('loginFailure', error);
					// Тут еще alert
				}
			);
		},
		logout({ commit }) {
			userServices.logout();
			commit('logout');
		},
	},
	mutations: {
		loginRequest(state, user) {
			state.status = { loggingIn: true };
			state.user = user;
		},
		loginSuccess(state, user) {
			state.status = { loggedIn: true };
			state.user = user;
		},
		loginFailure(state) {
			state.status = {};
			state.user = null;
		},
		logout(state) {
			state.status = {};
			state.user = null;
		},
	},
};
