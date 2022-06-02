import API from '@/api/api.js';
import axios from 'axios';

export default {
	name: 'Home',
	props: {},
	computed: {},
	data() {
		return {};
	},
	components: {
		API,
	},
	methods: {},
	created() {
		const urls = [
			'https://oauth.reddit.com/hot',
			'https://oauth.reddit.com/new',
			'https://oauth.reddit.com/rising',
			'https://oauth.reddit.com/top',
		];

		API.getRequests(urls)
			.then(
				axios.spread((...responses) => {
					console.log(responses);
				})
			)
			.catch((errors) => {
				console.log(errors);
			});
	},
	destroyed() {},
	watch: {},
};
