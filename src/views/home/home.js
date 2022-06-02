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
			posts: [],
		};
	},
	components: {
		API,
		TopicSelector,
	},
	methods: {
		kFormatter(num) {
			return Math.abs(num) > 999
				? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'k'
				: Math.sign(num) * Math.abs(num);
		},
		loadTopic(data) {
			this.currentTopic = data;
		},
		processTopic() {
			this.posts = [];

			this.topicResponses[0][this.currentTopic].children.map((element) => {
				let myObj = {};

				myObj['id'] = element.data.id;
				myObj['author'] = element.data.author;
				myObj['num_comments'] = element.data.num_comments;
				myObj['thumbnail'] = element.data.thumbnail;
				myObj['title'] = element.data.title;
				myObj['ups'] = element.data.ups;
				myObj['url'] = element.data.url;
				myObj['selftext'] =
					element.data.selftext == ''
						? 'No description.'
						: element.data.selftext.replace('&amp;#x200B;', '').slice(0, 70) +
						  '...';

				this.posts.push(myObj);
			});

			console.log(this.posts);
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
