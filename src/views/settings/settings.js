import API from '@/api/api.js';

export default {
	name: 'Settings',
	props: {},
	computed: {},
	data() {
		return {
			saveSuccess: false,
		};
	},
	components: {
		API,
	},
	methods: {
		authorize() {
			API.authorizeReddit();
		},
		saveParams() {
			localStorage.setItem(
				'limit',
				document.getElementById('numOfItems').value
			);

			this.saveSuccess = true;
		},
	},
	created() {
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);

		if (urlParams.has('code')) {
			API.getAccessToken(urlParams.get('code'));
		}

		if (localStorage.getItem('limit') == null) {
			localStorage.setItem('limit', 10);
		}
	},
	mounted() {
		document.getElementById('numOfItems').value = localStorage.getItem('limit');
	},
	destroyed() {},
	watch: {
		saveSuccess: function () {
			setTimeout(() => {
				this.saveSuccess = false;
			}, 3000);
		},
	},
};
