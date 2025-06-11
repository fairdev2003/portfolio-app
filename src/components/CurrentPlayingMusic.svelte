<script lang="ts">
	import { onMount } from 'svelte';
	import axios from 'axios';

	let track: any = '';
	let token: string | null =
		'BQD7nFvb9UzK5d3K42K5xjDDs2QtHm5q0v7w0ZVINXHG8QpMUig6gssEYGWtSYMQYsKJJ1E-G50Fn7oKzw6v7nw4vx_4RZc4SXinxiV2e6qYy5I3HEYIBcbOWAD11CfpJnIMq-r_j5HQkdGbDH6fwz6p7E7s6_8OTbGL_7lUAUSsUScCuDh7jQISz0cV4sxtli7iYOB3r7GLxi0eskUzFaXR8CJrefnMauxjUownE42Zd6Z38FhrU3xTAYJylyZMcyol';

	const getTokenFromUrl = () => {
		const hash = window.location.hash;
		const params = new URLSearchParams(hash.substring(1));
		return params.get('access_token');
	};

	onMount(async () => {
		token = getTokenFromUrl();

		if (!token) {
		} else {
			try {
				const res = await axios.get('https://api.spotify.com/v1/me/player/currently-playing', {
					headers: {
						Authorization: `Bearer ${token}`
					}
				});

				if (res.data && res.data.item) {
					track = {
						name: res.data.item.name,
						artist: res.data.item.artists.map((a) => a.name).join(', '),
						image: res.data.item.album.images[0].url
					};
				} else {
					track = { name: 'Nic nie gra', artist: '', image: '' };
				}
			} catch (err) {
				console.error('Błąd pobierania:', err.response?.data || err.message);
				track = { name: 'Błąd', artist: '', image: '' };
			}
		}
	});
</script>

<main>
	<h1>🎧 Aktualnie odtwarzany utwór</h1>

	{#if track}
		<div>
			{#if track.image}
				<img src={track.image} alt="Okładka" width="200" />
			{/if}
			<h2>{track.name}</h2>
			<p>{track.artist}</p>
		</div>
	{:else}
		<p>Ładowanie...</p>
	{/if}
</main>

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
