<script lang="ts">
	import Box from './Document.svelte';
	import SpotifyStatus from './SpotifyStatus.svelte';
	import Caret from './typography/Caret.svelte';

	import Heading from './typography/Heading.svelte';
	import Paragraph from './typography/Paragraph.svelte';

	let loaded = false;
</script>

<div class="flex flex-col gap-6 lg:col-span-2">
	<div>
		<Caret />
		<SpotifyStatus />
	</div>

	<div></div>
	<Heading>Newsy</Heading>
	<Box customPaging="1/2">
		<Paragraph white>🚧 W trakcie remontu <a href="/about-me">Zobacz</a>.</Paragraph>
	</Box>
	<Box customPaging="2/2">
		<Paragraph white
			>🎵 Czarnuchyy <a
				target="_blank"
				href="https://suno.com/song/cb4ad69a-d418-4410-bd02-ca948a9c04a1">here</a
			></Paragraph
		>
	</Box>

	<Heading id="Plany">Plany</Heading>

	<Box customPaging="1/2">
		<Paragraph white
			>⏯️ Stworzyć playliste z trzema najlepszymi utworami z mojego albumu na Spotify.</Paragraph
		>
	</Box>
	<Box customPaging="2/2">
		<Paragraph white>🟢 Dodać komponent, który pokazuje czy jestem aktywny na Discordzie.</Paragraph
		>
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
