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
			userEditServices.editName(first_name).then(
				(user) => {
					console.log(user);
				},
				(error) => {}
			);
		},
		usernameEdit({ commit, dispatch }, username) {
			userEditServices.editUsername(username).then(
				(user) => {
					dispatch('getUserInfo');
				},
				(error) => {}
			);
		},
		emailEdit({ commit }, email) {
			userEditServices.editEmail(email).then(
				(user) => {
					console.log(user);
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
