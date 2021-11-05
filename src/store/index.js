import { createStore } from 'vuex';
import { coursesModule } from './coursesModule';

export default createStore({
	state: {},
	mutations: {},
	actions: {},
	modules: { courses: coursesModule },
});
