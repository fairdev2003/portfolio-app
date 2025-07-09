import type { BlogWindowProps } from '../../../../types/blog.types';

export async function load({ url }) {
	const pageData: BlogWindowProps = {
		route: url.pathname,
		routeName: 'Zaczynamy z modem!',
		navigation: {
			left: {
				value: 'SFM',
				href: '/blog/sfm'
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
