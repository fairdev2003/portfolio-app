<script lang="ts">
	import { klimsonApp } from '$lib';
	import Box from '../../components/Box.svelte';
	import SpotifyStatus from '../../components/SpotifyStatus.svelte';
	import CircularProgressBar from './(components)/CircularProgressBar.svelte';
	import Heading from './(components)/Heading.svelte';
	import MusicGroup from './(components)/MusicGroup.svelte';
	import Paragraph from './(components)/Paragraph.svelte';
	import { playlistBorder } from './(components)/static';
	import type { MusicGroupType } from './(components)/types/music';
</script>

<div class="flex flex-col gap-3">
	<div class="mb-5 flex flex-col gap-3">
		<Heading>Muzyka.</Heading>
		<Paragraph
			>Taka mała sekcja na temat muzyki, której słucham. Dzięki muzyce czuje sie w jakims filmie. Na
			dobrą sprawe lubie praktycznie każdą muzyke. Nie mam swojego ulubionego typu muzyki więc tak
			naprawde mam szeroki gust.</Paragraph
		>
	</div>

	<MusicGroup
		groupDesc={playlistBorder.groupDesc}
		groupName={playlistBorder.groupName}
		musicList={playlistBorder.musicList}
	/>
</div>

<svelte:head>
	<title>Muzyka</title>
	<meta name="description" content="Muzyka to moja pasja" />
</svelte:head>
