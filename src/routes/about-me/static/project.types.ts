import type { projects } from './projects';

export type Tech = {
	name: string;
	iconUrl?: string;
	docsUrl?: string;
	inverted?: boolean;
};

export type ProjectLogo = {
	url: string;
	color?: string;
	style?: string; // Tailwind css
};

export type ProjectLinkType = 'repo' | 'demo' | 'docs' | 'design';

export type ProjectLink = {
	type: ProjectLinkType;
	url: string;
};

export type ProjectCategory = 'web' | 'mobile' | 'library' | 'tool';

export type ProjectStatus = 'wip' | 'completed' | 'archived';

export type Project = {
	id: string;
	name: string;
	description: string;
	category: ProjectCategory;
	status: ProjectStatus;
	techStack: Tech[];
	links: ProjectLink[];
	screenshots?: string[];
	logo?: ProjectLogo;
	startDate?: string;
	endDate?: string;
	features?: string[];
};

export type ProjectPage = {
	project?: Project;
};

export type ProjectId = (typeof projects)[number]['id'];
