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
			topicResponses: [],
			topics: ['hot', 'new', 'rising', 'top'],
			currentTopic: 'hot',
			responsesLoaded: false,
			posts: [],
			urls: [
				'https://oauth.reddit.com/hot',
				'https://oauth.reddit.com/new',
				'https://oauth.reddit.com/rising',
				'https://oauth.reddit.com/top',
			],
			fetchLoaded: false,
			openedComments: [],
			commentsLoaded: false,
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
		hideDetails(id) {
			document.getElementById(id + '-details').classList.toggle('hidden');
			document.getElementById(id + '-details').removeAttribute('style');
		},
		showDetails(id) {
			this.commentsLoaded = false;
			this.openedComments = [];

			document.getElementById(id + '-details').removeAttribute('style');
			document.getElementById(id + '-details').classList.toggle('hidden');

			API.getRequest('comments/' + id, '?limit=10&sort=new&depth=0')
				.then((response) => {
					response.data[1].data.children.map((element) => {
						let myObj = {};

						myObj['id'] = element.data.id;
						myObj['author'] = element.data.author;
						myObj['body'] = element.data.body;

						this.openedComments.push(myObj);
					});

					this.commentsLoaded = true;
					document.getElementById(id + '-details').style.cssText +=
						'opacity: 1 !important';
				})
				.catch(function (error) {
					console.log(error);
				});
		},
		loadNext() {
			this.fetchRequests(
				this.topicResponses[this.topicResponses.length - 1].after
			);
		},
		fetchRequests(after = '') {
			if (after == '') {
				this.topicResponses = [];
			}

			for (let i = 0; i < this.urls.length; i++) {
				if (this.currentTopic == this.topics[i]) {
					API.getTopic(
						this.urls[i],
						'?limit=' + localStorage.getItem('limit') + '&after=' + after
					)
						.then((response) => {
							this.topicResponses.push(response.data.data);

							if (this.responsesLoaded == true) {
								this.processTopic();
							}

							this.responsesLoaded = true;
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

			this.topicResponses.map((rootElement) => {
				rootElement.children.map((element) => {
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
							? element.data.title.slice(0, 80) + '...'
							: element.data.title;
					myObj['ups'] = element.data.ups;
					myObj['selftext'] =
						element.data.selftext == ''
							? element.data.url.slice(0, 70)
							: element.data.selftext.replace('&amp;#x200B;', '').slice(0, 70) +
							  '...';

					myObj['selftextFull'] =
						element.data.selftext == ''
							? element.data.url
							: element.data.selftext.replace('&amp;#x200B;', '');

					this.posts.push(myObj);

					this.fetchLoaded = true;
				});
			});
		},
	},
	created() {
		this.fetchLoaded = false;
		this.fetchRequests();
	},
	beforeDestroy() {},
	watch: {
		currentTopic: function () {
			this.fetchLoaded = false;

			this.fetchRequests();
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
