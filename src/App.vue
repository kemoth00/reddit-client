<template>
	<div
		id="app"
		class="flex flex-col justify-between bg-zinc-100 h-fit min-h-screen"
	>
		<Navbar class="h-36 z-50" />
		<router-view class="mb-auto h-fit" />
		<Footer class="h-10" />
	</div>
</template>

<script src="./app.js"></script>
