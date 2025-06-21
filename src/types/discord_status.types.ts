export type DiscordPresenceResponse = {
	success: boolean;
	data: DiscordPresenceData;
};

export type DiscordPresenceData = {
	kv: Record<string, unknown>;
	discord_user: DiscordUser;
	activities: DiscordActivity[];
	discord_status: 'online' | 'idle' | 'dnd' | 'offline';
	active_on_discord_web: boolean;
	active_on_discord_desktop: boolean;
	active_on_discord_mobile: boolean;
	active_on_discord_embedded: boolean;
	listening_to_spotify: boolean;
	spotify?: SpotifyActivity;
};

export type DiscordUser = {
	id: string;
	username: string;
	global_name: string;
	display_name: string;
	avatar: string | null;
	discriminator: string;
	clan: null | unknown;
	primary_guild?: {
		tag: string;
		identity_guild_id: string;
		badge: string;
		identity_enabled: boolean;
	};
	avatar_decoration_data: unknown | null;
	collectibles: unknown | null;
	bot: boolean;
	public_flags: number;
};

export type DiscordActivity = {
	id: string;
	name: string;
	type: ActivityType;
	state?: string;
	session_id?: string;
	details?: string;
	timestamps?: {
		start?: number;
		end?: number;
	};
	assets?: {
		large_image?: string;
		large_text?: string;
		small_image?: string;
		small_text?: string;
	};
	application_id?: string;
	created_at: number;
	buttons?: string[] | DiscordActivityButton[];
	flags?: number;
	sync_id?: string;
	party?: {
		id: string;
	};
};

export type DiscordActivityButton = {
	label: string;
	url: string;
};

export type ActivityType =
	| 0 // Playing
	| 1 // Streaming
	| 2 // Listening
	| 3 // Watching
	| 4 // Custom Status
	| 5 // Competing
	| number;

export type SpotifyActivity = {
	timestamps: {
		start: number;
		end: number;
	};
	album: string;
	album_art_url: string;
	artist: string;
	song: string;
	track_id: string;
};
