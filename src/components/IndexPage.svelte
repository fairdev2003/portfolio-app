<script lang="ts">
	import Box from './Paper.svelte';

	import Heading from './typography/Heading.svelte';
	import Paragraph from './typography/Paragraph.svelte';

	let loaded = false;
</script>

<div class="flex flex-col gap-6 lg:col-span-2">
	<Heading>Index</Heading>

	<Box>
		<Paragraph>🚧 W trakcie remontu <a href="/about-me">Zobacz</a>.</Paragraph>
	</Box>

	<Heading>Plany</Heading>

	<Box customPaging="1/2">
		<Paragraph
			>⏯️ Stworzyć playliste z trzema najlepszymi utworami z mojego albumu na Spotify.</Paragraph
		>
	</Box>
	<Box customPaging="2/2">
		<Paragraph>🟢 Dodać komponent, który pokazuje czy jestem aktywny na Discordzie.</Paragraph>
	</Box>

	<div class="h-[100px]"></div>
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
