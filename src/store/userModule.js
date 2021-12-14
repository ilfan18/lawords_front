import { userInfoServices, userEditServices } from '@/services';

export const userModule = {
	namespaced: true,
	state: {
		user: {
			age: null,
			courses: [],
			image: '',
			level: '',
			user: {
				email: '',
				first_name: '',
				last_name: '',
				username: '',
			},
		},
		isUserLoading: null,
	},
	actions: {
		getUserInfo({ commit }) {
			commit('isUserLoading', true);
			userInfoServices.getUserInfo().then(
				(user) => {
					commit('setUser', user);
					commit('isUserLoading', false);
				},
				(error) => {}
			);
		},
		nameEdit({ commit, dispatch }, first_name) {
			userEditServices.nameEdit(first_name).then(
				(user) => {
					console.log(user);
				},
				(error) => {}
			);
		},
		usernameEdit({ commit, dispatch }, username) {
			userEditServices.usernameEdit(username).then(
				(user) => {
					dispatch('getUserInfo');
				},
				(error) => {}
			);
		},
		emailEdit({ commit }, email) {
			userEditServices.emailEdit(email).then(
				(user) => {
					console.log(user);
				},
				(error) => {}
			);
		},
		passwordEdit({ commit, dispatch }, new_password, current_password) {
			userEditServices.passwordEdit(username).then(
				(user) => {
					dispatch('getUserInfo');
				},
				(error) => {}
			);
		},
	},
	mutations: {
		setUser(state, user) {
			state.user = user;
		},
		isUserLoading(state, isLoading) {
			state.isUserLoading = isLoading;
		},
	},
};
