export const notificationsModule = {
	namespaced: true,
	state: {
		notifications: [],
	},
	actions: {
		setNotifications({ commit, dispatch }, notifications) {},
		addNotification({ commit, state, dispatch }, notification) {
			//! Пока в куках, потом с сервера сделать
			let expires = new Date(Date.now() + 86400e3 * 7);
			expires = expires.toUTCString();
			let notifications = state.notifications;
			notifications.unshift(notification);
			notifications = notifications.slice(0, 3);
			commit('setNotifications', notifications);
		},
	},
	mutations: {
		setNotifications(state, notifications) {
			state.notifications = notifications;
		},
	},
};
