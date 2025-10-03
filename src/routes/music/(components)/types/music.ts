export type MusicType = {
	id: number;
	song_name: string;
	song_artist: string;
	song_image: string;
	song_link?: string;
};

export type MusicGroupType = {
	groupName: string;
	groupDesc: string;
	musicList: MusicType[];
};

export type PlayButtonState = 'playing' | 'not-playing';
