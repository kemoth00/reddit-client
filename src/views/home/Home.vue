<template>
	<div class="flex flex-row">
		<TopicSelector @TopicChanged="loadTopic" />
		<div class="w-1/2">
			<div v-for="item in posts" :key="item.id">
				<div class="flex flex-row bg-white my-1 h-52 min-h-min shadow-md p-4">
					<div class="flex flex-col w-3/4 bg-orange-300">
						<div class="bg-red-300 h-1/4">
							<span class="pr-3">{{ item.author }}</span>
							<span>1 hours ago</span>
						</div>
						<div class="h-2/4">
							<span class="font-bold">{{ item.title }}</span
							><br />
							<span>{{ item.selftext }}</span>
						</div>
						<div class="bg-red-300 h-1/4">
							<span class="pr-3">{{ item.num_comments }} Comments</span>
							<span class="pr-3">Share</span>
							<span class="pr-3">Uplabs</span>
						</div>
					</div>
					<div class="flex flex-col w-1/4 bg-red-100">
						<div class="h-1/4">
							<span class="float-right p-2">sziv ...</span>
						</div>
						<div class="h-3/4 relative">
							<img
								:src="item.thumbnail"
								:alt="item.title"
								v-if="item.thumbnail != 'self' && item.thumbnail != 'default'"
								class="w-40 h-24 mr-2 mb-4 absolute bottom-0 right-0"
							/>
						</div>
					</div>
					<div class="flex flex-col w-20 bg-orange-300">
						<div class="h-2/5 relative bg-red-200 text-center">
							<svg
								width="24px"
								height="24px"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								class="absolute inset-x-0 bottom-0 ml-auto mr-auto"
							>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M15.848 13.47L10.848 5.47C10.4563 4.84333 9.54368 4.84333 9.15201 5.47L4.15201 13.47C3.73573 14.136 4.21458 15 5.00001 15H15C15.7854 15 16.2643 14.136 15.848 13.47ZM6.80426 13L10 7.8868L13.1958 13H6.80426Z"
									fill="currentColor"
								/>
							</svg>
						</div>
						<div class="h-1/5 relative text-center">
							<span class="leading-8 font-bold text-xl">{{
								kFormatter(item.ups)
							}}</span>
						</div>
						<div class="h-2/5 relative bg-red-200 text-center">
							<svg
								width="24px"
								height="24px"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								class="absolute inset-x-0 top-0 rotate-180 ml-auto mr-auto"
							>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M15.848 13.47L10.848 5.47C10.4563 4.84333 9.54368 4.84333 9.15201 5.47L4.15201 13.47C3.73573 14.136 4.21458 15 5.00001 15H15C15.7854 15 16.2643 14.136 15.848 13.47ZM6.80426 13L10 7.8868L13.1958 13H6.80426Z"
									fill="currentColor"
								/>
							</svg>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="w-1/4"></div>
	</div>
</template>

<script src="./home.js"></script>
