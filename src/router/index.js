import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Main.vue';
import Login from '../views/LoginPage.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/login',
		name: 'Login',
		component: Login,
	},
	{
		path: '/courses',
		name: 'Courses',
		component: () =>
			import(/* webpackChunkName: "settings" */ '@/views/Courses.vue'),
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ '@/views/About.vue'),
	},
	{
		path: '/settings',
		name: 'Settings',
		component: () =>
			import(/* webpackChunkName: "settings" */ '@/views/Settings.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

router.beforeEach((to, from, next) => {
	// redirect to login page if not logged in and trying to access a restricted page
	const publicPages = ['/login'];
	const authRequired = !publicPages.includes(to.path);
	const loggedIn = localStorage.getItem('user');

	if (authRequired && !loggedIn) {
		return next('/login');
	}

	next();
});

export default router;
