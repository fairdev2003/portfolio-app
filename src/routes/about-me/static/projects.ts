import type { Project } from './project.types';

export const projects: Project[] = [
	{
		id: 'portfolio',
		name: 'Portfolio',
		description: 'Dzięki temu projektowi widzisz ten tekst',
		category: 'web',
		status: 'wip',
		techStack: [{ name: 'Svelte' }],
		links: [
			{ type: 'repo', url: 'https://github.com/fairdev2003/portfolio-app' },
			{ type: 'demo', url: 'https://klimson.dev/' }
		],
		logo: {
			color: 'bg-orange-500/20',
			url: 'https://icon.icepanel.io/Technology/svg/Svelte.svg'
		},
		screenshots: [],
		startDate: '10.03.2025'
	}
];
