export type LastFmRecentTracksResponse = {
	recenttracks: RecentTracks;
};

export type RecentTracks = {
	track: Track[];
	'@attr': PaginationAttributes;
};

export type Track = {
	artist: Artist;
	streamable: string;
	image: Image[];
	mbid: string;
	album: Album;
	name: string;
	url: string;
	date?: TrackDate;
};

export type Artist = {
	mbid: string;
	'#text': string;
};

export type Album = {
	mbid: string;
	'#text': string;
};

export type Image = {
	size: 'small' | 'medium' | 'large' | 'extralarge';
	'#text': string;
};

export type TrackDate = {
	uts: string;
	'#text': string;
};

export type PaginationAttributes = {
	user: string;
	totalPages: string;
	page: string;
	total: string;
	perPage: string;
};
