import { createStore } from 'vuex';
import { coursesModule } from './coursesModule';
import { authModule } from './authModule';
import { userModule } from './userModule';
import { alertModule } from './alertModule';
import { UIModule } from './UIModule';
import { notificationsModule } from './notificationsModule';

export default createStore({
	state: {},
	mutations: {},
	actions: {},
	modules: {
		courses: coursesModule,
		auth: authModule,
		user: userModule,
		alert: alertModule,
		ui: UIModule,
		notifications: notificationsModule,
	},
});
