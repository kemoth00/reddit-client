<template>
	<div class="flex flex-row">
		<TopicSelector @TopicChanged="loadTopic" />
		<div class="w-1/2">
			<div
				id="countdown"
				class="bg-white shadow-md p-4 text-center"
				v-if="intervalLoaded"
			>
				20 seconds remaining until refresh
			</div>
			<div v-for="item in posts" :key="item.id">
				<div class="flex flex-row bg-white my-1 h-52 min-h-min shadow-md p-4">
					<div class="flex flex-col w-3/4 mr-10">
						<div class="h-1/4">
							<span class="pr-3">{{ item.author }}</span>
							<span>1 hours ago</span>
						</div>
						<div class="h-2/4">
							<span class="font-bold">{{ item.title }}</span
							><br />
							<span>{{ item.selftext }}</span>
						</div>
						<div class="h-1/4 relative">
							<div>
								<svg
									width="24px"
									height="24px"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
									class="absolute w-5 h-5 bottom-0 mr-3"
									style="left: 0rem; right: 0rem"
								>
									<path
										d="M12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z"
									/>
								</svg>
								<span class="pr-3 absolute inset-x-6 bottom-0"
									>{{ item.num_comments }} Comments</span
								>
							</div>

							<div>
								<svg
									version="1.1"
									id="Capa_1"
									xmlns="http://www.w3.org/2000/svg"
									xmlns:xlink="http://www.w3.org/1999/xlink"
									x="0px"
									y="0px"
									viewBox="0 0 227.216 227.216"
									xml:space="preserve"
									class="absolute w-5 h-5 bottom-0 mr-3"
									style="left: 9.5rem; right: 9.5rem"
								>
									<path
										d="M175.897,141.476c-13.249,0-25.11,6.044-32.98,15.518l-51.194-29.066c1.592-4.48,2.467-9.297,2.467-14.317
	c0-5.019-0.875-9.836-2.467-14.316l51.19-29.073c7.869,9.477,19.732,15.523,32.982,15.523c23.634,0,42.862-19.235,42.862-42.879
	C218.759,19.229,199.531,0,175.897,0C152.26,0,133.03,19.229,133.03,42.865c0,5.02,0.874,9.838,2.467,14.319L84.304,86.258
	c-7.869-9.472-19.729-15.514-32.975-15.514c-23.64,0-42.873,19.229-42.873,42.866c0,23.636,19.233,42.865,42.873,42.865
	c13.246,0,25.105-6.042,32.974-15.513l51.194,29.067c-1.593,4.481-2.468,9.3-2.468,14.321c0,23.636,19.23,42.865,42.867,42.865
	c23.634,0,42.862-19.23,42.862-42.865C218.759,160.71,199.531,141.476,175.897,141.476z M175.897,15
	c15.363,0,27.862,12.5,27.862,27.865c0,15.373-12.499,27.879-27.862,27.879c-15.366,0-27.867-12.506-27.867-27.879
	C148.03,27.5,160.531,15,175.897,15z M51.33,141.476c-15.369,0-27.873-12.501-27.873-27.865c0-15.366,12.504-27.866,27.873-27.866
	c15.363,0,27.861,12.5,27.861,27.866C79.191,128.975,66.692,141.476,51.33,141.476z M175.897,212.216
	c-15.366,0-27.867-12.501-27.867-27.865c0-15.37,12.501-27.875,27.867-27.875c15.363,0,27.862,12.505,27.862,27.875
	C203.759,199.715,191.26,212.216,175.897,212.216z"
									/>
									<g></g>
									<g></g>
									<g></g>
									<g></g>
									<g></g>
									<g></g>
									<g></g>
									<g></g>
									<g></g>
									<g></g>
									<g></g>
									<g></g>
									<g></g>
									<g></g>
									<g></g>
								</svg>

								<span class="pr-3 absolute inset-x-44 bottom-0">Share</span>
							</div>
							<div>
								<svg
									version="1.1"
									id="Layer_1"
									xmlns="http://www.w3.org/2000/svg"
									xmlns:xlink="http://www.w3.org/1999/xlink"
									x="0px"
									y="0px"
									viewBox="0 0 512 512"
									xml:space="preserve"
									class="absolute w-5 h-5 bottom-0 mr-3"
									style="left: 14.5rem; right: 14.5rem"
								>
									<g>
										<g>
											<path
												d="M336.401,0l-0.65,7.199c-1.79,19.831-10.878,38.2-25.59,51.726c-14.801,13.609-34.036,21.103-54.16,21.103
			c-20.125,0-39.359-7.494-54.16-21.103c-14.712-13.527-23.8-31.897-25.59-51.726L175.6,0h-63.559v512h287.918V0H336.401z
			 M384.139,152.055h-8.096v15.82h8.096v328.305H127.861V167.874h8.096v-15.82h-8.096V15.82h33.558
			c3.505,20.977,13.894,40.207,29.714,54.751c17.73,16.301,40.766,25.278,64.868,25.278s47.138-8.977,64.868-25.278
			c15.819-14.544,26.208-33.774,29.714-54.751h33.558V152.055z"
											/>
										</g>
									</g>
									<g>
										<g>
											<rect
												x="151.964"
												y="152.059"
												width="16.006"
												height="15.82"
											/>
										</g>
									</g>
									<g>
										<g>
											<rect
												x="183.973"
												y="152.059"
												width="16.005"
												height="15.82"
											/>
										</g>
									</g>
									<g>
										<g>
											<rect
												x="215.981"
												y="152.059"
												width="16.006"
												height="15.82"
											/>
										</g>
									</g>
									<g>
										<g>
											<rect
												x="248.001"
												y="152.059"
												width="16.005"
												height="15.82"
											/>
										</g>
									</g>
									<g>
										<g>
											<rect
												x="280.009"
												y="152.059"
												width="16.006"
												height="15.82"
											/>
										</g>
									</g>
									<g>
										<g>
											<rect
												x="312.017"
												y="152.059"
												width="16.006"
												height="15.82"
											/>
										</g>
									</g>
									<g>
										<g>
											<rect
												x="344.037"
												y="152.059"
												width="16.006"
												height="15.82"
											/>
										</g>
									</g>
									<g>
										<g>
											<path
												d="M152.056,192.07v151.869h207.889V192.07H152.056z M344.125,328.119H167.876V207.89h176.249V328.119z"
											/>
										</g>
									</g>
									<g>
										<g>
											<rect
												x="183.973"
												y="360.13"
												width="144.054"
												height="15.82"
											/>
										</g>
									</g>
									<g>
										<g>
											<rect
												x="183.973"
												y="392.138"
												width="144.054"
												height="15.82"
											/>
										</g>
									</g>
									<g>
										<g>
											<rect
												x="183.973"
												y="424.157"
												width="56.023"
												height="15.82"
											/>
										</g>
									</g>
									<g>
										<g>
											<rect
												x="183.973"
												y="456.166"
												width="24.009"
												height="15.82"
											/>
										</g>
									</g>
									<g>
										<g>
											<rect
												x="223.986"
												y="456.166"
												width="24.009"
												height="15.82"
											/>
										</g>
									</g>
									<g>
										<g>
											<rect
												x="263.999"
												y="456.166"
												width="24.009"
												height="15.82"
											/>
										</g>
									</g>
									<g>
										<g>
											<rect
												x="304.013"
												y="456.166"
												width="24.009"
												height="15.82"
											/>
										</g>
									</g>
									<g></g>
									<g></g>
									<g></g>
									<g></g>
									<g></g>
									<g></g>
									<g></g>
									<g></g>
									<g></g>
									<g></g>
									<g></g>
									<g></g>
									<g></g>
									<g></g>
									<g></g>
								</svg>
								<span class="pr-3 absolute inset-x-64 bottom-0">Uplabs</span>
							</div>
						</div>
					</div>
					<div class="flex flex-col w-1/4">
						<div class="h-1/4">
							<svg
								width="20px"
								height="20px"
								viewBox="0 0 20 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								class="w-5 h-5 float-right"
							>
								<circle cx="10" cy="15" r="2" fill="currentColor" />
								<circle cx="10" cy="10" r="2" fill="currentColor" />
								<circle cx="10" cy="5" r="2" fill="currentColor" />
							</svg>
							<svg
								version="1.1"
								id="Capa_1"
								xmlns="http://www.w3.org/2000/svg"
								xmlns:xlink="http://www.w3.org/1999/xlink"
								x="0px"
								y="0px"
								viewBox="0 0 471.701 471.701"
								xml:space="preserve"
								class="w-5 h-5 float-right"
							>
								<g>
									<path
										d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1
		c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3
		l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4
		C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3
		s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4
		c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3
		C444.801,187.101,434.001,213.101,414.401,232.701z"
									/>
								</g>
								<g></g>
								<g></g>
								<g></g>
								<g></g>
								<g></g>
								<g></g>
								<g></g>
								<g></g>
								<g></g>
								<g></g>
								<g></g>
								<g></g>
								<g></g>
								<g></g>
								<g></g>
							</svg>
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
					<div class="flex flex-col w-20">
						<div class="h-2/5 relative text-center">
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
						<div class="h-2/5 relative text-center">
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
