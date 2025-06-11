<script lang="ts">
	import Box from './Box.svelte';
	import AnimatedLink from './AnimatedLink.svelte';

	import axios from 'axios'; // w przeglądarce pomiń ten import lub dodaj przez CDN
	import { onMount } from 'svelte';
	import CurrentPlayingMusic from './CurrentPlayingMusic.svelte';

	const token =
		'BQD7nFvb9UzK5d3K42K5xjDDs2QtHm5q0v7w0ZVINXHG8QpMUig6gssEYGWtSYMQYsKJJ1E-G50Fn7oKzw6v7nw4vx_4RZc4SXinxiV2e6qYy5I3HEYIBcbOWAD11CfpJnIMq-r_j5HQkdGbDH6fwz6p7E7s6_8OTbGL_7lUAUSsUScCuDh7jQISz0cV4sxtli7iYOB3r7GLxi0eskUzFaXR8CJrefnMauxjUownE42Zd6Z38FhrU3xTAYJylyZMcyol';

	onMount(async () => {
		const response = await axios.get(
			'https://accounts.spotify.com/authorize?client_id=5243d8d316cd4f46b80bd3df84f21dd6&response_type=token&redirect_uri=http://localhost:5173/&scope=user-read-currently-playing%20user-read-playback-state&show_dialog=true',
			{
				headers: {
					Authorization: `Bearer ${token}`
				}
			}
		);
		console.log(response.data + 's');
	});
</script>

<div class="flex flex-col gap-6 lg:col-span-2">
	<div class="flex items-center gap-4">
		<h2>Strona Główna</h2>
		<div class="h-0.5 flex-1 bg-gray-500"></div>
	</div>

	<Box className="font-[500] text-gray-400 bg-[#131333] p-10 flex flex-col gap-3">
		<p>Miło mi Cię tu gościć.</p>
		<p>
			Serdeczne pozdrowienia dla Pana Krzysztofa. Dziękuję, że pozwolił mi Pan zrealizować ten
			projekt w wybranym frameworku. Zdecydowałem się na <span class="text-orange-500">Svelte</span>
		</p>
		<p>Miłego przeglądania! :)</p>
		<AnimatedLink text="O mnie" href="/about-me" />
	</Box>

	<CurrentPlayingMusic />
</div>
