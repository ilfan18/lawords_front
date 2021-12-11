import { userInfoServices } from '@/services';

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
		isProfileLoding: false,
	},
	actions: {
		setProfile({ commit }) {
			commit('profileLoding', true);
			userInfoServices.getUserInfo().then(
				(profile) => {
					commit('setProfile', profile);
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
			state.isCoursesLoding = isLoading;
		},
	},
};
