export type Story = {
	name: string;
	created_at: Date;
	media: string; // link to photo or video
	music?: MusicSample; // link
};

export type StoryGroup = {
	name: string;
	stories: Story[];
	created_at: Date;
};

export type MusicSample = {
	name: string;
	author: string;
	src: string;
};

export type DeezerResponse = {};

export type Timeline = StoryGroup[];
