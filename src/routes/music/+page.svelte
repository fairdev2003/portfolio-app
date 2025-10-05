<script lang="ts">
	import MusicGroup from './(components)/MusicGroup.svelte';
	import Paragraph from '../../components/typography/Paragraph.svelte';
	import { playlistBorder } from './(components)/static';

	import Heading from '../../components/typography/Heading.svelte';
	import PagesNavigation from '../../components/typography/PagesNavigation.svelte';
	import RenovationAlert from '../about-me/sectors/components/RenovationAlert.svelte';
</script>

<div class="flex flex-col gap-3">
	<PagesNavigation
		pages={[
			{ name: 'KLIMSON', route: '/' },
			{ name: 'MUZYKA', route: '/music' }
		]}
	/>
	<div class="mb-5 flex flex-col gap-3">
		<Heading id="Muzyka">Muzyka.</Heading>
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

	<div class="h-5"></div>

	<RenovationAlert />
</div>
