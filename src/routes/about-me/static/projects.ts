import type { Project } from './project.types';

export const projects: Project[] = [
	{
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
			},
			{
				name: 'GSAP',
				inverted: true,
				docsUrl: 'https://gsap.com/docs/v3/',
				iconUrl:
					'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAC20lEQVR4AXyUyZVjNwxFLxSHz/GvSCxlYa9aikTtSKozqVp64RysTOj7QH4Npwc0ieHhAQT5VX3gV1Ir2baohK3iMGOUJ8yoV6CX5hXkUQKjecsOw6IWVqbiVvhxjOcKUnLhUBNpPYbRXt2IsbZs0Aeb6z4zMJNzG2l/qgwxrIDDmMjSr1FKk2j6c2o0ktTaBX0gir46dJ9lBlMvVPNYRe1BKtq/Ix1liPLAGYw73+ZjYq33opJQjaRwMvZY+MlFJkpeVOOa762DzWPSAmmzDUouLqCXTqX7yHGfksaT9XMwZfLK4PWDCiC9j0pW3j6HLpEyn402a+I9CpGKcgefH3T/GMXRxh/AfwyuZbWk88Lexbe0cU/e4EMKPslR+2H+ffL1XPNZ5jU3mlybxM3c2SYabCoG54J3N0rsUZvt2XzxWVKT+Moa9sBiS7y6kXRicBL+Zvwn6NX4BE6j6jI8BGoDgiEX5Sh+0/5d4JDjmLLDSqIcTXw6bUjXQR3FfqPGTc5ZP0XJfbGjPG5pwFRbwQ0wp4Y++ICSW5j0PZFQaepBY7Pu374JkbqqO6dN8caAqnFGGfNGyV8MnQl/iqVrxqWDyfGHFam7qD7E33EqaZv2io7rq75cGIPf9T/FvvnLehtFnhPrbI4EM1A50Qb11YpM1gWATSyDv4g/SO4ExOJh5smtLzb25tzlUEM/u4Yn8+Z9SsQPGsNF/QYj+5/pcxqzcYbJqYtjlYkeWVfu039cJlw3RmCzDP/ZltqnuXU+KSr6GSdQNUyLXF7+QhvtljaV6AKv1pafiVkXDuX7P0hi/oWqH5DeikNeUabQzXAx7iBlXMvXEEwbSJPQn+ICpc61x9M+T+N5KVs7zxaO3Z4TgRbD5qQnPsS+9BGzCLQwFZ1X/2DtHWfNTujmSdW9w0xlLvxCPVQIwq+cEoH8XLjLIq64m8fvZnGed7jZs0+eEbsxJYnvLzOpU/8PAAD//71M/yQAAAAGSURBVAMADZz3Nb1PQX4AAAAASUVORK5CYII='
			}

			// ._flair-2D-18.png
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
		id: 'clan-manager',
		name: 'Obey Clan Manager',
		description: 'Bot do zarządzania ludźmi w klanie Obey w grze Pixel Gun 3D',
		category: 'tool',
		status: 'archived',
		techStack: [
			{
				name: 'Python',
				docsUrl: 'https://gsap.com/docs/v3/',
				iconUrl: 'https://icon.icepanel.io/Technology/svg/Python.svg'
			},
			{
				name: 'MySQL',
				docsUrl: 'https://gsap.com/docs/v3/',
				iconUrl: 'https://icon.icepanel.io/Technology/svg/MySQL.svg'
			}
		],
		links: [
			{ type: 'repo', url: 'https://github.com/fairdev2003/clan-management-bot-pg' },
			{
				type: 'demo',
				url: 'https://discordapp.com/oauth2/authorize?client_id=1032359513673707591',
				customLinkName: 'https://discordapp.com/oauth2/authorize'
			}
		],
		logo: {
			color: 'bg-yellow-800/30',
			url: 'https://icon.icepanel.io/Technology/svg/Python.svg'
		},
		screenshots: [],
		startDate: '18.03.2023',
		endDate: '13.05.2023'
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
