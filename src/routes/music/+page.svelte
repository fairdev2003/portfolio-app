<script lang="ts">
	import { klimsonApp } from '$lib';
	import Box from '../../components/Box.svelte';
	import SpotifyStatus from '../../components/SpotifyStatus.svelte';
	import CircularProgressBar from './(components)/CircularProgressBar.svelte';
	import Heading from './(components)/Heading.svelte';
	import MusicGroup from './(components)/MusicGroup.svelte';
	import Paragraph from './(components)/Paragraph.svelte';
	import type { MusicGroupType } from './(components)/types/music';

	const playlist1: MusicGroupType = {
		groupName: 'Border Mood.',
		groupDesc:
			'Tej muzyki słucham gdy mój mózg potrzebuje czegoś mrocznego. Mega wczuwam sie w muzyka Mareuxa. Jest mega klimatyczna i powoduje ze czuje sie w jakims mrocznym świecie',
		musicList: [
			{
				id: 1,
				song_name: 'Blackmail',
				song_artist: 'Mareux',
				song_image: 'http://i.scdn.co/image/ab67616d0000b273be32ef0bc81ca74c7d33dd10'

				// 	song_link:
				// 		'https://res.cloudinary.com/dzaslaxhw/video/upload/v1759446605/Music/SpotiDownloader.com_-_Blackmail_-_Mareux.mp3'
			},
			{
				id: 2,
				song_name: 'Nonstop Romance',
				song_artist: 'Mareux',
				song_image: 'http://i.scdn.co/image/ab67616d0000b273be32ef0bc81ca74c7d33dd10'
			},
			{
				id: 3,
				song_name: 'Ébène Fumé',
				song_artist: 'Mareux',
				song_image: 'http://i.scdn.co/image/ab67616d0000b273be32ef0bc81ca74c7d33dd10'
			},
			{
				id: 4,
				song_name: 'Prodigy',
				song_artist: 'Mareux',
				song_image: 'http://i.scdn.co/image/ab67616d0000b273be32ef0bc81ca74c7d33dd10'
			},
			{
				id: 5,
				song_name: 'Radio Club',
				song_artist: 'Mareux',
				song_image: 'http://i.scdn.co/image/ab67616d0000b273be32ef0bc81ca74c7d33dd10'
			},
			{
				id: 6,
				song_name: 'Cloud Without Tear',
				song_artist: 'R. Missing',
				song_image: 'https://i.scdn.co/image/ab67616d0000b2733105a0609dfce0287c76fa60',
				song_link:
					'https://res.cloudinary.com/dzaslaxhw/video/upload/v1759441661/Music/SpotiDownloader.com_-_Cloud_Without_Tear_-_R.mp3'
			}
		]
	};
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
		groupDesc={playlist1.groupDesc}
		groupName={playlist1.groupName}
		musicList={playlist1.musicList}
	/>
</div>

<svelte:head>
	<title>Muzyka</title>
	<meta name="description" content="Muzyka to moja pasja" />
</svelte:head>
