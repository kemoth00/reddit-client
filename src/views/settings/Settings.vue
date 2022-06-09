<template>
	<div class="flex flex-col items-center text-2xl">
		<button
			class="bg-white text-gray-800 font-bold py-2 px-4 inline-flex items-center shadow-md"
			:class="
				this.$store.state.tokenStatus !== 1
					? 'hover:bg-orange-500 transition duration-300'
					: ''
			"
			v-on:click="authorize"
			:disabled="this.$store.state.tokenStatus === 1"
		>
			<span>Connect Reddit Account</span>

			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="3 3 16 16"
				class="w-6 ml-2"
				v-if="this.$store.state.tokenStatus === 1"
			>
				<defs>
					<linearGradient
						gradientUnits="userSpaceOnUse"
						y2="-2.623"
						x2="0"
						y1="986.67"
						id="0"
					>
						<stop stop-color="#ffce3b" />
						<stop offset="1" stop-color="#ffd762" />
					</linearGradient>
					<linearGradient
						y2="-2.623"
						x2="0"
						y1="986.67"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#ffce3b" />
						<stop offset="1" stop-color="#fef4ab" />
					</linearGradient>
				</defs>
				<g
					transform="matrix(1.99997 0 0 1.99997-10.994-2071.68)"
					fill="#da4453"
				>
					<rect y="1037.36" x="7" height="8" width="8" fill="#32c671" rx="4" />
					<path
						d="m123.86 12.966l-11.08-11.08c-1.52-1.521-3.368-2.281-5.54-2.281-2.173 0-4.02.76-5.541 2.281l-53.45 53.53-23.953-24.04c-1.521-1.521-3.368-2.281-5.54-2.281-2.173 0-4.02.76-5.541 2.281l-11.08 11.08c-1.521 1.521-2.281 3.368-2.281 5.541 0 2.172.76 4.02 2.281 5.54l29.493 29.493 11.08 11.08c1.52 1.521 3.367 2.281 5.54 2.281 2.172 0 4.02-.761 5.54-2.281l11.08-11.08 58.986-58.986c1.52-1.521 2.281-3.368 2.281-5.541.0001-2.172-.761-4.02-2.281-5.54"
						fill="#fff"
						transform="matrix(.0436 0 0 .0436 8.177 1039.72)"
						stroke="none"
						stroke-width="9.512"
					/>
				</g>
			</svg>
			<svg
				xmlns:osb="http://www.openswatchbook.org/uri/2009/osb"
				xmlns:dc="http://purl.org/dc/elements/1.1/"
				xmlns:cc="http://creativecommons.org/ns#"
				xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
				xmlns:svg="http://www.w3.org/2000/svg"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
				xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
				viewBox="0 0 48 48"
				version="1.1"
				id="svg15"
				sodipodi:docname="cross red circle.svg"
				inkscape:version="0.92.3 (2405546, 2018-03-11)"
				class="w-6 ml-2"
				v-if="this.$store.state.tokenStatus === 2"
			>
				<defs id="defs7">
					<linearGradient id="linearGradient828" osb:paint="solid">
						<stop
							style="stop-color: #ff0000; stop-opacity: 1"
							offset="0"
							id="stop826"
						/>
					</linearGradient>
					<linearGradient
						id="0"
						gradientUnits="userSpaceOnUse"
						y1="47.37"
						x2="0"
						y2="-1.429"
					>
						<stop stop-color="#c52828" id="stop2" />
						<stop offset="1" stop-color="#ff5454" id="stop4" />
					</linearGradient>
				</defs>
				<g
					transform="matrix(.99999 0 0 .99999-58.37.882)"
					enable-background="new"
					id="g13"
					style="fill-opacity: 1"
				>
					<circle
						cx="82.37"
						cy="23.12"
						r="24"
						fill="url(#0)"
						id="circle9"
						style="fill-opacity: 1; fill: #dd3333"
					/>
					<path
						d="m87.77 23.725l5.939-5.939c.377-.372.566-.835.566-1.373 0-.54-.189-.997-.566-1.374l-2.747-2.747c-.377-.372-.835-.564-1.373-.564-.539 0-.997.186-1.374.564l-5.939 5.939-5.939-5.939c-.377-.372-.835-.564-1.374-.564-.539 0-.997.186-1.374.564l-2.748 2.747c-.377.378-.566.835-.566 1.374 0 .54.188.997.566 1.373l5.939 5.939-5.939 5.94c-.377.372-.566.835-.566 1.373 0 .54.188.997.566 1.373l2.748 2.747c.377.378.835.564 1.374.564.539 0 .997-.186 1.374-.564l5.939-5.939 5.94 5.939c.377.378.835.564 1.374.564.539 0 .997-.186 1.373-.564l2.747-2.747c.377-.372.566-.835.566-1.373 0-.54-.188-.997-.566-1.373l-5.939-5.94"
						fill="#fff"
						fill-opacity=".842"
						id="path11"
						style="fill-opacity: 1; fill: #ffffff"
					/>
				</g>
			</svg>
		</button>
		<br />
		<div class="text-center">
			<label for="numOfItems">Number of items: </label>
			<input
				type="text"
				id="numOfItems"
				name="numOfItems"
				class="text-center shadow-md p-1"
			/>
			<br /><br />
			<button
				class="bg-white text-gray-800 font-bold py-2 px-4 inline-flex items-center shadow-md hover:bg-orange-500 transition duration-300"
				v-on:click="saveParams"
			>
				Save parameters
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="3 3 16 16"
					class="w-6 ml-2"
					v-if="saveSuccess"
				>
					<defs>
						<linearGradient
							gradientUnits="userSpaceOnUse"
							y2="-2.623"
							x2="0"
							y1="986.67"
							id="0"
						>
							<stop stop-color="#ffce3b" />
							<stop offset="1" stop-color="#ffd762" />
						</linearGradient>
						<linearGradient
							y2="-2.623"
							x2="0"
							y1="986.67"
							gradientUnits="userSpaceOnUse"
						>
							<stop stop-color="#ffce3b" />
							<stop offset="1" stop-color="#fef4ab" />
						</linearGradient>
					</defs>
					<g
						transform="matrix(1.99997 0 0 1.99997-10.994-2071.68)"
						fill="#da4453"
					>
						<rect
							y="1037.36"
							x="7"
							height="8"
							width="8"
							fill="#32c671"
							rx="4"
						/>
						<path
							d="m123.86 12.966l-11.08-11.08c-1.52-1.521-3.368-2.281-5.54-2.281-2.173 0-4.02.76-5.541 2.281l-53.45 53.53-23.953-24.04c-1.521-1.521-3.368-2.281-5.54-2.281-2.173 0-4.02.76-5.541 2.281l-11.08 11.08c-1.521 1.521-2.281 3.368-2.281 5.541 0 2.172.76 4.02 2.281 5.54l29.493 29.493 11.08 11.08c1.52 1.521 3.367 2.281 5.54 2.281 2.172 0 4.02-.761 5.54-2.281l11.08-11.08 58.986-58.986c1.52-1.521 2.281-3.368 2.281-5.541.0001-2.172-.761-4.02-2.281-5.54"
							fill="#fff"
							transform="matrix(.0436 0 0 .0436 8.177 1039.72)"
							stroke="none"
							stroke-width="9.512"
						/>
					</g>
				</svg>
			</button>
		</div>

		<div class="text-xs mt-10 shadow-md px-6 py-6 bg-white text-sm">
			1. Mindenek előtt kattints a "Connect Reddit Account" gombra<br />
			2. Kattints a felugró oldalon az "Allow" gombra<br />
			3.1 Ha nem történt hiba a "Connect Reddit Account" gombra kerül egy pipa
			és kattinthatatlan lesz.<br />
			3.2 Ha történt hiba a "Connect Reddit Account" gombra kerül egy X és
			kattintható lesz.<br />
			4. A token 1 óra alatt járna le ezért minden route váltásnál frissíti a
			tokent. (localStorage)
		</div>
	</div>
</template>

<script src="./settings.js"></script>
