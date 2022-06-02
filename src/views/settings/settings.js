import API from '@/api/api.js';

export default {
	name: 'Settings',
	props: {},
	computed: {},
	data() {
		return {};
	},
	components: {
		API,
	},
	methods: {
		authorize() {
			API.authorizeReddit();
		},
	},
	mounted() {
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);

		if (urlParams.has('code')) {
			API.getAccessToken(urlParams.get('code'));
		}
	},
	destroyed() {},
	watch: {},
};
