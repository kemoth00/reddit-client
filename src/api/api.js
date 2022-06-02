import axios from 'axios';
import router from '@/router';
import store from '@/store';

const auth = {
	username: process.env.VUE_APP_CLIENT_ID,
	password: process.env.VUE_APP_SECRET,
};

const API = {
	authorizeReddit() {
		window.location.replace(
			'https://www.reddit.com/api/v1/authorize?client_id=' +
				process.env.VUE_APP_CLIENT_ID +
				'&response_type=code&state=1&redirect_uri=' +
				process.env.VUE_APP_REDIRECT_URI +
				'&duration=permanent&scope=identity'
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
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded',
					},
					auth,
				}
			)
			.then(function (response) {
				localStorage.clear();
				localStorage.setItem('access_token', response.data.access_token);
				localStorage.setItem('refresh_token', response.data.refresh_token);
				store.state.hasToken = true;

				router.push('settings');
			})
			.catch(function (error) {
				localStorage.clear();
				store.state.hasToken = false;

				console.log(error);
			});
	},
	refreshToken(token) {
		axios
			.post(
				'https://www.reddit.com/api/v1/access_token',
				'grant_type=refresh_token&refresh_token=' + token,
				{
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded',
					},
					auth,
				}
			)
			.then(function (response) {
				localStorage.setItem('access_token', response.data.access_token);
				localStorage.setItem('refresh_token', response.data.refresh_token);
				store.state.hasToken = true;
			})
			.catch(function (error) {
				localStorage.clear();
				store.state.hasToken = false;

				console.log(error);
			});
	},
};

export default API;
