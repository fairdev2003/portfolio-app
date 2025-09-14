<script lang="ts">
	import Box from './Box.svelte';
	import AnimatedLink from './AnimatedLink.svelte';
	import CurrentPlayingMusic from './CurrentPlayingMusic.svelte';
	import Heading from './Heading.svelte';
	import RecomendationSnippet from './orange_love/RecomendationSnippet.svelte';
	import { browser } from '$app/environment';
	import OrangeLoading from './OrangeLoading.svelte';

	let loaded = false;
</script>

<div class="flex flex-col gap-6 lg:col-span-2">
	<Heading value="Strona Główna" />

	<RecomendationSnippet />

	<Box className="box-tt">
		<div class="flex flex-col gap-10 lg:grid lg:grid-cols-5">
			<div class="col-span-2 mx-auto flex items-center justify-center lg:mx-0">
				{#if browser}
					<img
						alt="mc-me"
						src="https://starlightskins.lunareclipse.studio/render/ultimate/fair123	/full?renderScale=0.3"
						class="transition-all duration-500 ease-out"
						style="width: {loaded ? '100%' : '30%'}; height: auto; transform: scale({loaded
							? 1
							: 0.3}); opacity: {loaded ? 1 : 0.5};"
						on:load={() => (loaded = true)}
					/>
				{:else}
					<!-- Placeholder podczas SSR -->
					<div style="width: 30%; height: auto; background: #333;"></div>
				{/if}
			</div>
			<div class="col-span-3 flex flex-col gap-2">
				<h2 class="header">Daniel tried to swim in lava</h2>
				<p class="text">
					Daniel met a creeper and got a big “surprise party” in his face. Respawn and try again…
					maybe bring a shield next time.
				</p>
			</div>
		</div>
	</Box>

	<div class="mx-auto">
		<OrangeLoading/>
	</div>

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
