import API from '@/api/api.js';
// import axios from 'axios';
import TopicSelector from '@/components/topicselector/Topicselector.vue';
import store from '@/store';
import router from '@/router';

export default {
	name: 'Home',
	props: {},
	computed: {},
	data() {
		return {
			timeLeft: 20,
			topicResponses: [],
			topics: ['hot', 'new', 'rising', 'top'],
			currentTopic: 'hot',
			responsesLoaded: false,
			posts: [],
			refreshTimer: null,
			windowInterval: null,
			intervalLoaded: false,
			urls: [
				'https://oauth.reddit.com/hot',
				'https://oauth.reddit.com/new',
				'https://oauth.reddit.com/rising',
				'https://oauth.reddit.com/top',
			],
			fetchLoaded: false,
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
		fetchRequests() {
			this.timeLeft = 20;
			let that = this;
			this.refreshTimer = setInterval(function () {
				if (that.timeLeft > 0) {
					document.getElementById('countdown').innerHTML =
						that.timeLeft + ' seconds remaining until refresh';
				}
				that.timeLeft -= 1;
			}, 1000);

			this.topicResponses = [];
			for (let i = 0; i < this.urls.length; i++) {
				if (this.currentTopic == this.topics[i]) {
					API.getTopic(this.urls[i], '')
						.then((response) => {
							this.topicResponses.push(response.data.data);

							if (this.responsesLoaded == true) {
								this.processTopic();
							}

							this.responsesLoaded = true;
							this.intervalLoaded = true;
						})
						.catch(function (error) {
							localStorage.clear();
							store.state.tokenStatus = 2;

							console.log(error);
						});
				}
			}
		},
		loadTopic(data) {
			this.currentTopic = data;
		},
		processTopic() {
			this.posts = [];

			this.topicResponses[0].children.map((element) => {
				let myObj = {};

				myObj['id'] = element.data.id;
				myObj['author'] = element.data.author;
				myObj['num_comments'] = element.data.num_comments;
				myObj['thumbnail'] =
					element.data.thumbnail == 'self' ||
					element.data.thumbnail == 'default' ||
					element.data.thumbnail == 'nsfw' ||
					element.data.thumbnail == 'image'
						? 'default.jpg'
						: element.data.thumbnail;
				myObj['title'] =
					element.data.title.length > 100
						? element.data.title.slice(0, 100) + '...'
						: element.data.title;
				myObj['ups'] = element.data.ups;
				myObj['url'] = element.data.url;
				myObj['selftext'] =
					element.data.selftext == ''
						? 'No description.'
						: element.data.selftext.replace('&amp;#x200B;', '').slice(0, 70) +
						  '...';

				this.posts.push(myObj);

				this.fetchLoaded = true;
			});

			//console.log(this.posts);
		},
	},
	created() {
		this.fetchLoaded = false;
		this.fetchRequests();

		this.windowInterval = setInterval(() => {
			clearInterval(this.refreshTimer);
			this.refreshTimer = null;

			this.fetchRequests();
		}, 20000);
	},
	beforeDestroy() {
		clearInterval(this.refreshTimer);
		clearInterval(this.windowInterval);
		this.refreshTimer = null;
		this.windowInterval = null;
	},
	watch: {
		currentTopic: function () {
			this.fetchLoaded = false;
			clearInterval(this.refreshTimer);
			clearInterval(this.windowInterval);
			this.refreshTimer = null;
			this.windowInterval = null;

			this.fetchRequests();

			this.windowInterval = setInterval(() => {
				clearInterval(this.refreshTimer);
				this.refreshTimer = null;

				this.fetchRequests();
			}, 20000);
		},

		responsesLoaded: function () {
			this.processTopic();
		},

		'$store.state.tokenStatus': function () {
			if (this.$store.state.tokenStatus == 2) {
				router.push('settings');
			}
		},
	},
};
