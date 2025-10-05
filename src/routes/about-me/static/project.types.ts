export type Tech = {
	name: string;
	iconUrl?: string;
	docsUrl?: string;
};

export type ProjectLogo = {
	url: string;
	color?: string;
	style?: string; // Tailwind css
};

export type ProjectLink = {
	type: 'repo' | 'demo' | 'docs' | 'design';
	url: string;
};

export type Project = {
	id: string;
	name: string;
	description: string;
	category: 'web' | 'mobile' | 'library' | 'tool';
	status: 'wip' | 'completed' | 'archived';
	techStack: Tech[];
	links: ProjectLink[];
	screenshots?: string[];
	logo?: ProjectLogo;
	startDate?: string;
	endDate?: string;
	features?: string[];
};
