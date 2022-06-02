import Vue from 'vue';
import VueRouter from 'vue-router';
import API from '@/api/api.js';
import store from '@/store';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'home',
		component: () => import('@/views/home/Home.vue'),
		props: true,
		meta: { title: 'R-C | Home' },
	},
	{
		path: '/settings',
		name: 'settings',
		component: () => import('@/views/settings/Settings.vue'),
		props: true,
		meta: { title: 'R-C | Settings' },
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

router.beforeEach((to, from, next) => {
	document.title = to.meta.title;

	if (localStorage.getItem('refresh_token') !== null) {
		API.refreshToken(localStorage.getItem('refresh_token'));

		next();
	} else {
		if (store.state.tokenStatus == 1) {
			store.state.tokenStatus = 2;
		}
		if (to.name !== 'settings') {
			next('settings');
		} else {
			next();
		}
	}
});

export default router;
