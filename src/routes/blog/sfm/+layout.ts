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
				value: 'Examples',
				href: '/blog/sfm/examples'
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
