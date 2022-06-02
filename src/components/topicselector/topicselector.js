export default {
	name: 'Topicselector',
	props: {},
	computed: {},
	data() {
		return {
			currentTopic: 'hot',
		};
	},
	components: {},
	methods: {
		emitTopicChanged(topic) {
			this.currentTopic = topic;
			this.$emit('TopicChanged', topic);
		},
	},
	created() {},
	destroyed() {},
	watch: {},
};
