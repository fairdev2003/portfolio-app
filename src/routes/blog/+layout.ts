import type { BlogWindowProps } from '../../types/blog.types.js';

const routeData: Record<string, string> = {
	'/blog/sfm': 'Super Factory Manager',
	'/blog': 'Sekcja Blogowa'
};

export async function load({ url }) {
	const pageData: BlogWindowProps = {
		route: url.pathname,
		routeName: routeData[url.pathname]
	};
	return pageData;
}
