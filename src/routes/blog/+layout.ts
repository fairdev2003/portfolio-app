import type { BlogWindowProps } from '../../types/blog.types.js';

const routeData: Record<string, string> = {
	'/blog/sfm': 'Super Factory Manager',
	'/blog': 'Sekcja Blogowa'
};

export async function load({ url }) {
	const pageData: BlogWindowProps = {
		route: url.pathname,
		routeName: 'Sekcja Blogowa',
		navigation: {
			right: {
				value: 'SFM',
				href: '/blog/sfm/'
			}
		},
		references: [
			{
				name: 'Link do moda:',
				href: 'https://www.curseforge.com/minecraft/mc-mods/super-factory-manager'
			}
		]
	};
	return pageData;
}
