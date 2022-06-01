<template>
	<div>
		<nav class="bg-white shadow-lg text-sm">
			<div class="mx-auto px-4">
				<div class="flex justify-between">
					<div class="flex w-52 h-12 items-center justify-start">
						<!-- Website Logo -->
						<router-link :to="{ name: 'home' }">
							<img src="@/assets/logo.svg" class="h-8" alt="Reddit Logo" />
						</router-link>
					</div>
					<!-- Primary Navbar items -->
					<div class="hidden md:flex w-52 h-12 items-center justify-center">
						<router-link
							class="py-3.5 px-2 text-gray-700 font-semibold hover:text-orange-500 transition duration-300"
							:class="{ 'innerborder-orange': currentRouteName == 'home' }"
							aria-current="page"
							:to="{ name: 'home' }"
						>
							HOME
						</router-link>
					</div>
					<div class="hidden md:flex w-52 h-12 items-center justify-end">
						<router-link
							class="py-3.5 px-2 text-gray-700 font-semibold hover:text-orange-500 transition duration-300"
							:class="{ 'innerborder-orange': currentRouteName == 'settings' }"
							:to="{ name: 'settings' }"
						>
							SETTINGS
						</router-link>
					</div>
					<!-- Mobile menu button -->
					<div class="md:hidden flex items-center">
						<button class="outline-none mobile-menu-button">
							<svg
								class="w-6 h-6 text-gray-500 hover:text-orange-500"
								x-show="!showMenu"
								fill="none"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path d="M4 6h16M4 12h16M4 18h16"></path>
							</svg>
						</button>
					</div>
				</div>
			</div>
			<!-- mobile menu -->
			<div class="hidden mobile-menu">
				<ul class="">
					<li class="active">
						<router-link
							class="block text-sm px-2 py-4 hover:bg-orange-500 transition duration-300"
							:class="{ 'bg-orange-500': currentRouteName == 'home' }"
							aria-current="page"
							:to="{ name: 'home' }"
						>
							HOME
						</router-link>
					</li>
					<li>
						<router-link
							class="block text-sm px-2 py-4 hover:bg-orange-500 transition duration-300"
							:class="{ 'bg-orange-500': currentRouteName == 'settings' }"
							:to="{ name: 'settings' }"
						>
							SETTINGS
						</router-link>
					</li>
				</ul>
			</div>
		</nav>
	</div>
</template>

<script src="./navbar.js"></script>
