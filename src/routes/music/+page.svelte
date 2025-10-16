<script lang="ts">
	import MusicGroup from './(components)/MusicGroup.svelte';
	import Paragraph from '../../components/typography/Paragraph.svelte';
	import { playlistBorder } from './(components)/static';

	import Heading from '../../components/typography/Heading.svelte';
	import PagesNavigation from '../../components/typography/PagesNavigation.svelte';
	import RenovationAlert from '../about-me/sectors/components/RenovationAlert.svelte';
	import TopMusicPlayer from './(components)/TopMusicPlayer.svelte';
	import SpotifyStatus from '../../components/SpotifyStatus.svelte';
</script>

<div class="flex flex-col gap-3">
	<PagesNavigation
		pages={[
			{ name: 'KLIMSON', route: '/' },
			{ name: 'MUZYKA', route: '/music' }
		]}
	/>
	<div class="mb-5 flex flex-col gap-3">
		<SpotifyStatus />
		<Heading id="Muzyka">Muzyka.</Heading>
		<Paragraph
			>Taka mała sekcja o muzyce, której słucham. Dzięki niej często czuję się jak w filmie. Tak
			naprawdę lubię prawie każdy rodzaj muzyki. Nie mam jednego ulubionego gatunku, więc mój gust
			jest dość szeroki.</Paragraph
		>
	</div>

	<MusicGroup
		groupDesc={playlistBorder.groupDesc}
		groupName={playlistBorder.groupName}
		musicList={playlistBorder.musicList}
	/>

	<div class="h-5"></div>

	<RenovationAlert />
</div>
