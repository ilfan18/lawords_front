import { createStore } from 'vuex';
import { coursesModule } from './coursesModule';
import { authModule } from './authModule';
import { user } from './userModule';
import { alertModule } from './alertModule';
import { UIModule } from './UIModule';

export default createStore({
	state: {},
	mutations: {},
	actions: {},
	modules: {
		courses: coursesModule,
		auth: authModule,
		user: user,
		alert: alertModule,
		ui: UIModule,
	},
});
