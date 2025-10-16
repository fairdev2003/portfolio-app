import { pageSections } from './static';

export type PageContentsType = {
	path: string;
	name: string;
	description?: string;
};

export const pageContents: PageContentsType[] = [
	{ name: 'Cytaty', path: '/quotes', description: 'Moje życiowe cytaty' },
	{ name: 'Galeria', path: '/gallery', description: 'Galeria moich ulubionych zdjęć!' },
	{ name: 'ADHD', path: '/adhd', description: 'Moja historia z tym zaburzeniem' },
	{
		name: 'FTB Skies Expert',
		path: '/minecraft/ftb-skies-expert',
		description: 'Moja przygoda z paczką FTB Skies Expert'
	},
	{
		name: 'Minecraft',
		path: '/minecraft',
		description: 'Sekcja o grze Minecraft!'
	}
];

export const hobbyContents: PageContentsType[] = [
	{ name: 'Muzyka', path: '/music', description: 'Moja ulubiona muzyczka' },
	{ name: 'Gry', path: '/games', description: 'Moja ulubione gry w które gram' },
	{ name: 'Programowanie', path: '/coding', description: 'Programowanie to moja pasja.' }
];

export const funContents: PageContentsType[] = [
	{ name: 'Shitpost', path: '/shitpost', description: 'Sekcja z ahh zdjęciami' },
	{ name: 'Cyberspace', path: '/cyberspace', description: 'Retro design' }
];

export const techContents: PageContentsType[] = [
	{ name: 'i use arch btw', path: '/arch', description: 'Używam archa tak swoją drogą :)' },
	{ name: 'Ustawienia VSC', path: '/vsc', description: 'Jak wygląda mój setup w VSC' }
];
