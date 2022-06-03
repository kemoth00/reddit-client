import axios from 'axios';
import router from '@/router';
import store from '@/store';

const auth = {
	username: process.env.VUE_APP_CLIENT_ID,
	password: process.env.VUE_APP_SECRET,
};

const headers = {
	'Content-Type': 'application/x-www-form-urlencoded',
};

const API = {
	getRequest(url) {
		return axios.get('https://oauth.reddit.com/' + url, {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				Authorization: 'Bearer ' + localStorage.getItem('access_token'),
			},
		});
	},
	getTopic(url, options) {
		return axios.get(url + options, {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				Authorization: 'Bearer ' + localStorage.getItem('access_token'),
			},
		});
	},
	getRequests(urls) {
		const requests = [];
		urls.map((element) => {
			requests.push(
				axios.get(element, {
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded',
						Authorization: 'Bearer ' + localStorage.getItem('access_token'),
					},
				})
			);
		});

		return axios.all(requests, {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				Authorization: 'Bearer ' + localStorage.getItem('access_token'),
			},
		});
	},
	authorizeReddit() {
		window.location.replace(
			'https://www.reddit.com/api/v1/authorize?client_id=' +
				process.env.VUE_APP_CLIENT_ID +
				'&response_type=code&state=1&redirect_uri=' +
				process.env.VUE_APP_REDIRECT_URI +
				'&duration=permanent&scope=identity read wikiread vote'
		);
	},
	getAccessToken(code) {
		axios
			.post(
				'https://www.reddit.com/api/v1/access_token',
				'grant_type=authorization_code&code=' +
					code +
					'&redirect_uri=' +
					process.env.VUE_APP_REDIRECT_URI,
				{
					headers,
					auth,
				}
			)
			.then(function (response) {
				localStorage.setItem('access_token', response.data.access_token);
				localStorage.setItem('refresh_token', response.data.refresh_token);
				store.state.tokenStatus = 1;

				router.push('settings');
			})
			.catch(function (error) {
				store.state.tokenStatus = 2;

				console.log(error);
			});
	},
	refreshToken(token) {
		axios
			.post(
				'https://www.reddit.com/api/v1/access_token',
				'grant_type=refresh_token&refresh_token=' + token,
				{
					headers,
					auth,
				}
			)
			.then(function (response) {
				localStorage.setItem('access_token', response.data.access_token);
				localStorage.setItem('refresh_token', response.data.refresh_token);
				store.state.tokenStatus = 1;
			})
			.catch(function (error) {
				store.state.tokenStatus = 2;

				console.log(error);
			});
	},
};

export default API;
