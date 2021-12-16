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
		emailEdit({ commit }, email) {
			userEditServices.emailEdit(email).then(
				(user) => {
					dispatch('getUserInfo');
				},
				(error) => {}
			);
		},
		usernameEdit({ commit, dispatch }, username_request) {
			userEditServices.usernameEdit(username_request).then(
				(user) => {
					dispatch('getUserInfo');
				},
				(error) => {}
			);
		},
		passwordEdit({ commit, dispatch }, { new_password, current_password }) {
			userEditServices.passwordEdit(new_password, current_password).then(
				(user) => {
					dispatch('getUserInfo');
				},
				(error) => {}
			);
		},
		userPropertyEdit({ commit, dispatch }, property) {
			userEditServices.userPropertyEdit(property).then(
				(user) => {
					dispatch('getUserInfo');
				},
				(error) => {}
			);
		},
		imageEdit({ commit, dispatch }, { imageFile, onProgress }) {
			userEditServices.imageEdit(imageFile, onProgress).then(
				(user) => {
					dispatch('getUserInfo');
					dispatch('ui/hideUploadImageModal', null, { root: true });
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
