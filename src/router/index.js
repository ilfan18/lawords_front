import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../views/MainPage.vue';
import LoginPage from '../views/LoginPage.vue';
import RegisterPage from '../views/RegisterPage.vue';

const routes = [
	{
		path: '/',
		name: 'Main',
		component: MainPage,
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
		component: () => import('@/views/CoursesPage.vue'),
	},
	{
		path: '/lessons/:lessonId',
		name: 'LessonInfoPage',
		component: () => import('@/views/LessonInfoPage.vue'),
	},
	{
		path: '/exercise',
		name: 'ExercisePage',
		component: () => import('@/views/ExercisePage.vue'),
	},
	{
		path: '/profile',
		name: 'Profile',
		component: () => import('@/views/ProfilePage.vue'),
	},
	{
		path: '/about',
		name: 'About',
		component: () => import('@/views/AboutPage.vue'),
	},
	{
		path: '/settings',
		name: 'Settings',
		component: () => import('@/views/SettingsPage.vue'),
	},
	{
		path: '/cofirm-info',
		name: 'ConfirmInfoPage',
		component: () => import('@/views/ConfirmInfoPage.vue'),
	},
	{
		path: '/activate/:uid/:token',
		name: 'ConfirmPage',
		component: () => import('@/views/ConfirmPage.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

router.beforeEach((to, from, next) => {
	// Перенаправляет на страницу входа если не выполнен вход
	const publicPages = ['Login', 'Register', 'ConfirmInfo', 'Confirm'];
	const authRequired = !publicPages.includes(to.name);
	const loggedIn = localStorage.getItem('user');

	if (authRequired && !loggedIn) {
		return next('/login');
	}

	next();
});

export default router;
