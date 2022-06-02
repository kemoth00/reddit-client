import API from '@/api/api.js';
import axios from 'axios';
import TopicSelector from '@/components/topicselector/Topicselector.vue';

export default {
	name: 'Home',
	props: {},
	computed: {},
	data() {
		return {
			topicResponses: [],
			topics: ['hot', 'new', 'rising', 'top'],
			currentTopic: 'hot',
			responsesLoaded: false,
		};
	},
	components: {
		API,
		TopicSelector,
	},
	methods: {
		loadTopic(data) {
			this.currentTopic = data;
		},
		processTopic() {
			console.log(this.topicResponses[0][this.currentTopic]);
		},
	},
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
					let myObj = {};

					responses.map((element, index) => {
						myObj[this.topics[index]] = element.data.data;
					});

					this.topicResponses.push(myObj);

					this.responsesLoaded = true;
				})
			)
			.catch((errors) => {
				console.log(errors);
			});
	},
	destroyed() {},
	watch: {
		currentTopic: function () {
			this.processTopic();
		},

		responsesLoaded: function () {
			this.processTopic();
		},
	},
};
