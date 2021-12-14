import { userInfoServices, userEditServices } from '@/services';

export const userModule = {
	namespaced: true,
	state: {
		profile: {
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
		isProfileLoading: null,
	},
	actions: {
		setProfile({ commit }) {
			commit('profileLoding', true);
			userInfoServices.getUserInfo().then(
				(profile) => {
					commit('setProfile', profile);
					commit('profileLoding', false);
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
		usernameEdit({ commit }, username) {
			userEditServices.editUsername(username).then(
				(user) => {
					console.log(user);
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
		setProfile(state, profile) {
			state.profile = profile;
		},
		profileLoding(state, isLoading) {
			state.isProfileLoading = isLoading;
		},
	},
};
