<script lang="ts">
	import Box from './Box.svelte';
	import AnimatedLink from './AnimatedLink.svelte';
	import CurrentPlayingMusic from './CurrentPlayingMusic.svelte';
	import RecomendationSnippet from './orange_love/RecomendationSnippet.svelte';
	import { browser } from '$app/environment';
	import OrangeLoading from './OrangeLoading.svelte';
	import Heading from '../routes/music/(components)/Heading.svelte';

	let loaded = false;
</script>

<div class="flex flex-col gap-6 lg:col-span-2">
	<Heading>Index</Heading>

	<Box>Siema</Box>

	<!-- <div class="flex flex-col gap-5">
		<CurrentPlayingMusic />
	</div> -->
</div>

<style>
	@font-face {
		font-family: 'Consolas';
		src: url('./assets/consolas.ttf') format('truetype');
		font-weight: normal;
		font-style: normal;
	}

	.header {
		font-family: 'Consolas', monospace;
		font-weight: 800;
	}

	.text {
		font-family: 'Consolas', monospace;
		font-weight: 600;
	}
</style>
