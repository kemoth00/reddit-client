import store from '@/store';

export default {
	name: 'Topicselector',
	props: {
		horizontal: Boolean,
	},
	computed: {},
	data() {
		return {
			currentTopic: 'hot',
		};
	},
	components: {},
	methods: {
		emitTopicChanged(topic) {
			store.state.currentTopic = topic;
			this.currentTopic = topic;
			this.$emit('TopicChanged', topic);
		},
	},
	mounted() {},
	destroyed() {},
	watch: {
		'$store.state.currentTopic': function () {
			this.currentTopic = store.state.currentTopic;
		},
	},
};
