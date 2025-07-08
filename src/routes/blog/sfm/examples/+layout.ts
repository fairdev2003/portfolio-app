import type { BlogWindowProps } from '../../../../types/blog.types';

export async function load({ url }) {
	const pageData: BlogWindowProps = {
		route: url.pathname,
		routeName: 'Super Factory Manager',
		navigation: {
			left: {
				value: 'Słowo kluczowe - NAME',
				href: '/blog/sfm/name-keyword'
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
