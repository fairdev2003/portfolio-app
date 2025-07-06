import type { BlogWindowProps } from '../../../types/blog.types';

export async function load({ url }) {
	const pageData: BlogWindowProps = {
		route: url.pathname,
		routeName: 'Super Factory Manager',
		navigation: {
			left: {
				value: 'Blog',
				href: '/blog'
			},
			right: {
				value: 'Zaczynamy',
				href: '/blog/sfm/get-started'
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
