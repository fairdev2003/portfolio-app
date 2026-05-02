export type Story = {
	name: string;
	created_at: Date;
	media: string; // link to photo or video
	music?: string; // link
};

export type StoryGroup = {
	name: string;
	stories: Story[];
	created_at: Date;
};

export type Timeline = StoryGroup[];
