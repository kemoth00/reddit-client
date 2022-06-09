//import API from '@/api/api.js';

export default {
	name: 'Navbar',
	props: {},
	computed: {
		currentRouteName() {
			return this.$route.name;
		},
	},
	data() {
		return {};
	},
	components: {
		//API,
	},
	methods: {},
	mounted() {
		const btn = document.querySelector('button.mobile-menu-button');
		const menu = document.querySelector('.mobile-menu');

		btn.addEventListener('click', () => {
			menu.classList.toggle('hidden');
		});
	},
	destroyed() {},
	watch: {},
};
