import { pageSections } from './static';

export type PageContentsType = {
	path: string;
	name: string;
	description?: string;
};

export const pageContents: PageContentsType[] = [
	{ name: 'Cytaty', path: '/quotes', description: 'Moje życiowe cytaty' },
	{ name: 'Galeria', path: '/gallery', description: 'Moja ulubiona muzyczka' },
	{ name: 'ADHD', path: '/adhd', description: 'Moja ulubiona muzyczka' },
	{ name: 'Me', path: '/me', description: 'Moja ulubiona muzyczka' },
	{ name: 'Fajerwerki', path: '/lore', description: 'Moja ulubiona muzyczka' },
	{ name: 'i use arch btw', path: '/arch', description: 'Moja ulubiona muzyczka' }
];

export const hobbyContents: PageContentsType[] = [
	{ name: 'Muzyka', path: '/music', description: 'Moja ulubiona muzyczka' },
	{ name: 'Gry', path: '/games', description: 'Moja ulubiona muzyczka' },
	{ name: 'Programowanie', path: '/coding', description: 'Moja ulubiona muzyczka' }
];

export const shitpostContents: PageContentsType[] = [
	{ name: 'Index', path: '/shitpost', description: 'Moja ulubiona muzyczka' }
];
