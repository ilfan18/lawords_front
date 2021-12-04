import { userServices } from '@/services';

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
	},
	actions: {
		setProfile({ commit }) {
			userServices.getUserInfo().then(
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
	},
};
