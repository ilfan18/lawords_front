import { createStore } from 'vuex';
import { coursesModule } from './coursesModule';
import { authModule } from './authModule';
import { user } from './userModule';
import { alertModule } from './alertModule';

export default createStore({
	state: {},
	mutations: {},
	actions: {},
	modules: {
		courses: coursesModule,
		auth: authModule,
		user: user,
		alert: alertModule,
	},
});
