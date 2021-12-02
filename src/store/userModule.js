import { userServices } from '@/services';

export const userModule = {
	namespaced: true,
	state: { profile: {} },
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
