import { userInfoServices, userEditServices } from '@/services';
import router from '@/router';

export const userModule = {
	namespaced: true,
	state: {
		user: {
			age: '',
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
		emailEdit({ commit, dispatch }, email) {
			userEditServices.emailEdit(email).then(
				(user) => {
					dispatch('getUserInfo');
					dispatch('alert/clear', null, { root: true });
					dispatch('emailResendActivation', user.id);
				},
				(error) => {
					const alert = {
						type: 'error',
						message: error,
					};
					dispatch('alert/emailEditAlertSet', alert, { root: true });
				}
			);
		},
		emailConfirm({ commit, dispatch }, request) {
			userEditServices.emailConfirm(request).then(
				(response) => {
					router.push('/login');
				},
				(error) => {}
			);
		},
		emailResendActivation({ commit, dispatch }, uid) {
			userEditServices.emailResendActivation(uid).then(
				(response) => {
					dispatch('auth/logout', null, { root: true });
					router.push('/cofirm-info');
				},
				(error) => {}
			);
		},
		usernameEdit({ commit, dispatch }, username_request) {
			userEditServices.usernameEdit(username_request).then(
				(user) => {
					dispatch('getUserInfo');
					dispatch('alert/clear', null, { root: true });
				},
				(error) => {
					const alert = {
						new_username: error.new_username,
						current_password: error.current_password,
					};
					dispatch('alert/usernameEditAlertSet', alert, {
						root: true,
					});
				}
			);
		},
		passwordEdit({ commit, dispatch }, { new_password, current_password }) {
			userEditServices.passwordEdit(new_password, current_password).then(
				(user) => {
					dispatch('getUserInfo');
					dispatch('alert/clear', null, { root: true });
				},
				(error) => {
					const alert = {
						new_password: error.new_password,
						current_password: error.current_password,
					};
					dispatch('alert/passwordEditAlertSet', alert, {
						root: true,
					});
				}
			);
		},
		userPropertyEdit({ commit, dispatch }, property) {
			userEditServices.userPropertyEdit(property).then(
				(user) => {
					dispatch('getUserInfo');
					dispatch('alert/clear', null, { root: true });
				},
				(error) => {
					if (error.first_name) {
						dispatch(
							'alert/firstNameEditAlertSet',
							error.first_name,
							{ root: true }
						);
					} else if (error.last_name) {
						print('fsdf');
						dispatch(
							'alert/lastNameEditAlertSet',
							error.last_name,
							{ root: true }
						);
					}
				}
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
