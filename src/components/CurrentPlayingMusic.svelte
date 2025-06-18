<script lang="ts">
	import { onMount } from 'svelte';
	import axios, { type AxiosResponse } from 'axios';

	const clientId = '5243d8d316cd4f46b80bd3df84f21dd6';
	const clientSecret = '8218146b2dce46ddb5545d3728f9a06b';

	type TokenType = {
		access_token: string;
		expires_in: number;
		token_type: string;
	};

	// private methods
	async function _getToken(): Promise<string> {
		const result = await fetch('https://accounts.spotify.com/api/token', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				Authorization: 'Basic ' + btoa(clientId + ':' + clientSecret)
			},
			body: 'grant_type=client_credentials'
		});

		const data = await result.json();
		return data.access_token;
	}

	const _getGenres = async (token: string) => {
		const result = await fetch(`https://api.spotify.com/v1/me/player/currently-playing`, {
			method: 'GET',
			headers: { Authorization: 'Bearer ' + token }
		});

		const data = await result.json();
		console.log(data);
		return data.categories.items;
	};

	onMount(async () => {
		_getGenres(await _getToken());
	});
</script>

<main></main>

<style>
	main {
		text-align: center;
		font-family: sans-serif;
		padding: 2rem;
	}
	img {
		border-radius: 1rem;
		box-shadow: 0 0 10px #0004;
	}
</style>
