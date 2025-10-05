import { pageSections } from './static';

type PageContentsType = {
	path: string;
	name: string;
	description?: string;
};

export const pageContents: PageContentsType[] = [
	{ name: 'Muzyka', path: '/music', description: 'Moja ulubiona muzyczka' },
	{ name: 'Cytaty', path: '/quotes', description: 'Moje życiowe cytaty' },
	{ name: 'Galeria', path: '/gallery', description: 'Moja ulubiona muzyczka' },
	{ name: 'ADHD', path: '/adhd', description: 'Moja ulubiona muzyczka' },
	{ name: 'Me', path: '/me', description: 'Moja ulubiona muzyczka' },
	{ name: 'Fajerwerki', path: '/lore', description: 'Moja ulubiona muzyczka' }
];
