import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Main.vue';
import LoginPage from '../views/LoginPage.vue';
import RegisterPage from '../views/RegisterPage.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/login',
		name: 'Login',
		component: LoginPage,
	},
	{
		path: '/register',
		name: 'Register',
		component: RegisterPage,
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
	// Перенаправляет на страницу входа если не выполнен вход
	const publicPages = ['/login', '/register'];
	const authRequired = !publicPages.includes(to.path);
	const loggedIn = localStorage.getItem('user');

	if (authRequired && !loggedIn) {
		return next('/login');
	}

	next();
});

export default router;
