import type { Project } from './project.types';

export const projects: Project[] = [
	{
		// { src: 'Svelte.svg', stack_name: 'Svelte', href: 'https://svelte.dev/' }
		// { src: 'Tailwind-CSS.svg', stack_name: 'TailwindCSS', href: 'https://tailwindcss.com/' },
		// 	{
		// 	src: 'HTML5.svg',
		// 	stack_name: 'HTML5',
		// 	href: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5'
		// },
		// { src: 'CSS3.svg', stack_name: 'CSS3', href: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
		id: 'portfolio',
		name: 'Portfolio',
		description: 'Dzięki temu projektowi widzisz ten tekst',
		category: 'web',
		status: 'wip',
		techStack: [
			{
				name: 'Svelte',
				iconUrl: 'https://icon.icepanel.io/Technology/svg/Svelte.svg',
				docsUrl: 'https://svelte.dev/'
			},
			{
				name: 'TypeScript',
				iconUrl: 'https://icon.icepanel.io/Technology/svg/TypeScript.svg',
				docsUrl: 'https://www.typescriptlang.org/'
			},
			{
				name: 'HTML5',
				iconUrl: 'https://icon.icepanel.io/Technology/svg/HTML5.svg',
				docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5'
			},
			{
				name: 'CSS3',
				iconUrl: 'https://icon.icepanel.io/Technology/svg/CSS3.svg',
				docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
			},
			{
				name: 'TailwindCSS',
				iconUrl: 'https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg',
				docsUrl: 'https://tailwindcss.com/'
			}
		],
		links: [
			{ type: 'repo', url: 'https://github.com/fairdev2003/portfolio-app' },
			{ type: 'demo', url: 'https://klimson.dev' }
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
		links: [],
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
