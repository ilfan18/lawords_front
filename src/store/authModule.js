import { userServices } from '@/services';
import router from '@/router';

const user = JSON.parse(localStorage.getItem('user'));
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
					router.push('/courses');
				},
				(error) => {
					commit('loginFailure', error);
					dispatch('alert/error', error, { root: true });
				}
			);
		},
		logout({ commit }) {
			userServices.logout();
			commit('logout');
		},
		register({ dispatch, commit }, { email, username, password }) {
			commit('registerRequest', { username });
			userServices.register(email, username, password).then(
				(user) => {
					dispatch('login', { username, password });
					commit('registerSuccess', user);
					router.push('/courses');
				},
				(error) => {
					commit('registerFailure', error);
					dispatch('alert/error', error, { root: true });
				}
			);
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
		registerRequest(state, user) {
			state.status = { regestering: true };
			state.user = user;
		},
		registerSuccess(state, user) {
			state.status = { loggedIn: true };
			state.user = user;
		},
		registerFailure(state) {
			state.status = {};
			state.user = null;
		},
	},
};
