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
	},
	{
		id: 'klimson-server',
		name: 'Klimson Server',
		description: 'Moge sprawnie zarządzać strukturą moich plików i serwisów',
		category: 'web',
		status: 'wip',
		techStack: [{ name: 'Svelte' }],
		links: [
			{ type: 'repo', url: 'https://github.com/fairdev2003/portfolio-app' },
			{ type: 'demo', url: 'https://klimson.dev/' }
		],
		logo: {
			color: 'bg-cyan-500/20',
			url: 'https://icon.icepanel.io/Technology/svg/Go.svg'
		},
		screenshots: [],
		startDate: '10.03.2025'
	},
	{
		id: 'harc-quiz',
		name: 'HarcQuiz',
		description: 'Najwieksza strona z harcerskimi quizami.',
		category: 'web',
		status: 'wip',
		techStack: [{ name: 'Svelte' }],
		links: [
			{ type: 'repo', url: 'https://github.com/fairdev2003/portfolio-app' },
			{ type: 'demo', url: 'https://harc-quiz.pl/' }
		],
		logo: {
			color: 'bg-amber-800/20',
			url: 'https://res.cloudinary.com/dzaslaxhw/image/upload/v1759636482/samples/campfire-loading.svg'
		},
		screenshots: [],
		startDate: '10.03.2025'
	}
];

let s = '/src/assets/campfire.png';
