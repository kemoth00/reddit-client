<template>
	<div>
		<button v-on:click="authorize" v-if="!this.$store.state.hasToken">
			Authorize
		</button>
	</div>
</template>

<script src="./settings.js"></script>
