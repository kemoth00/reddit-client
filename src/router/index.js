import Vue from 'vue';
import VueRouter from 'vue-router';

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
	next();
});

export default router;
