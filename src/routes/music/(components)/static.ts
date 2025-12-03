import type { MusicGroupType, TopMusicType } from './types/music';

export const TopMusicPlaylist: TopMusicType[] = [
	{
		id: 0,
		song_name: 'Good Luck with Your Dreams',
		song_artist: 'DJ DENZ The Rooster',
		song_image: 'https://i.scdn.co/image/ab67616d0000b273ca887bc66aaa063549df03da',
		song_desc: 'i see stars in the night sky.',
		song_link: 'https://res.cloudinary.com/dzaslaxhw/video/upload/v1760832469/Music/gwyd.mp3'
	},
	{
		id: 1,
		song_name: 'Club De Vampiros',
		song_artist: 'French Police',
		song_image: 'https://i.scdn.co/image/ab67616d0000b273fc71e48308f836ad93901919',
		song_desc: 'dear vampiro, mood swings me again hell nah.',
		song_link:
			'https://res.cloudinary.com/dzaslaxhw/video/upload/v1760835203/Music/club_de_vampiros.mp3'
	},
	{
		id: 2,
		song_name: 'i see the moon',
		song_artist: 'Staticbøi, pavlos',
		song_image: 'https://i.scdn.co/image/ab67616d0000b273de6b61598de8aaa6f801b40c',
		song_desc: 'see, moon not that god damn stars.',
		song_link: ''
	}
];

export const playlistBorder: MusicGroupType = {
	groupName: 'Border Mood.',
	groupDesc:
		'Tej muzyki słucham gdy mój mózg potrzebuje czegoś mrocznego. Mega wczuwam sie w muzyka Mareuxa. Jest mega klimatyczna i powoduje ze czuje sie w jakims mrocznym świecie',
	musicList: [
		{
			id: 1,
			song_name: 'Blackmail',
			song_artist: 'Mareux',
			song_image: 'http://i.scdn.co/image/ab67616d0000b273be32ef0bc81ca74c7d33dd10',

			song_link:
				'https://res.cloudinary.com/dzaslaxhw/video/upload/v1759446605/Music/SpotiDownloader.com_-_Blackmail_-_Mareux.mp3'
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

export const blackMusic: MusicGroupType = {
	groupName: 'Czarna muzyka',
	groupDesc: 'Czarnuchyyyyyyyyy',
	musicList: [
		{
			id: 1,
			song_name: 'Czarnuchyy',
			song_artist: 'SmeggMann99',
			song_image: 'https://cdn2.suno.ai/image_large_cb4ad69a-d418-4410-bd02-ca948a9c04a1.jpeg',

			song_link: 'https://cdn1.suno.ai/cb4ad69a-d418-4410-bd02-ca948a9c04a1.mp3'
		}
	]
};
